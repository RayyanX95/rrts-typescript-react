import { IFetchTodoAction, DeleteTodoAction } from './todoList';

export enum ActionTypes {
  FETCH_TODO_LIST,
  DELETE_TODO,
}

export type Action = IFetchTodoAction | DeleteTodoAction