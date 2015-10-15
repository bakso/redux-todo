import React, { findDOMNode, Component, PropTypes } from 'react';

export default class TodoItem extends Component {
  render () {
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick={e => this.handleClick(e)}>
        Add
        </button>
      </div>
    )
  }
  handleClick () {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
}
