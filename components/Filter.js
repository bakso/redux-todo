import React, { Component, PropTypes } from 'react';

export default class TodoItem extends Component{
  renderFilter (filter, name) {
    if (this.props.filter === filter) {
      return <span>{name}</span>;
    }
    return (
      <a href="#" onClick={(ev)=>{
        ev.preventDefault();
        this.props.onFilterChange(filter);
      }}>
      {name}
      </a>
    )
  }
  render () {
    return (
      <div>
        Show:
        {this.renderFilter('SHOW_ALL', 'All')},
        {this.renderFilter('SHOW_COMPLETED', 'Completed')},
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </div>
    )
  }
}
