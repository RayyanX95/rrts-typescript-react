import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ITodo, fetchTodoList } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todoList: ITodo[];
  fetchTodoList(): any;
}

class App extends Component<AppProps> {
  componentDidMount = () => {
    this.props.fetchTodoList();
  }
  render() {
    console.log("todoList: ", this.props.todoList);
    return (
      <div>
        <h1>Hello World</h1>
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
