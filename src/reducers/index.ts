import { combineReducers } from "redux";
import { ITodo } from "../actions";
import { todoListReducer } from "./todoList";

export interface StoreState {
  todoList: ITodo[]
}

export const reducers = combineReducers<StoreState>({
  todoList: todoListReducer,
});