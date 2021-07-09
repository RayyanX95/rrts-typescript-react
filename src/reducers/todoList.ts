import { IFetchTodoAction, ITodo, ActionTypes } from '../actions';

export const todoListReducer = (state: ITodo[]  = [], action: IFetchTodoAction): ITodo[] => {
  switch (action.type) {
    case ActionTypes.FETCH_TODO_LIST:
      return action.payload;
    default:
      return state;
  }
}