import { Action, ITodo, ActionTypes, } from '../actions';

export const todoListReducer = (
  state: ITodo[] = [],
  action: Action
): ITodo[] => {
  switch (action.type) {
    case ActionTypes.FETCH_TODO_LIST:
      return action.payload;
    case ActionTypes.DELETE_TODO:
      return state.filter((todo: ITodo) => todo.id !== action.payload);
    default:
      return state;
  }
}