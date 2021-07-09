import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ITodo, fetchTodoList, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todoList: ITodo[];
  fetchTodoList(): any;
  deleteTodo(id: number): void;
}

class App extends Component<AppProps> {
  onFetchHandler = (): void => {
    this.props.fetchTodoList();
  }

  renderList = (): JSX.Element[] => {
    return this.props.todoList.map((todo: ITodo) => {
      return <li
        key={todo.id}
        onClick={() => this.onTodoClick(todo.id)} >{todo.title}</li>
    })
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div>
        <button onClick={this.onFetchHandler} >Fetch</button>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState): { todoList: ITodo[] } => {
  return { todoList: state.todoList }
}

const mapDispatchToProps = {
  fetchTodoList,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
