import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';
import { connect,Provider } from 'react-redux';
import { createStore } from 'redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';
import todoApp from './reducers';

let store = createStore(todoApp);

class App extends Component {
  render () {
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))
          }
        />
        <TodoList
          todos={this.props.visibleTodos}
          onTodoClick={index =>{
              dispatch(completeTodo(index))
          }}
        />
        <Filter
          filter={this.props.visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))
          }
        />
      </div>
    )
  }
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
}

var Wrap = connect(select)(App);

React.render(
  <Provider store={store}>
    <Wrap />
  </Provider>,
  document.getElementById('TodoApp')
)
