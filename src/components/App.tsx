import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ITodo, fetchTodoList } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todoList: ITodo[];
  fetchTodoList(): any;
}

class App extends Component<AppProps> {
  onFetchHandler = (): void => {
    this.props.fetchTodoList();
  }

  renderList = (): JSX.Element[] => {
    return this.props.todoList.map((todo: ITodo) => {
      return <li key={todo.id} >{todo.title}</li>
    })
  }

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
  fetchTodoList: fetchTodoList
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
