import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ITodo {
  id: number;
  title: string;
  complete: boolean;
}
export interface IFetchTodoAction {
  type: ActionTypes.FETCH_TODO_LIST;
  payload: ITodo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodoList = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<ITodo[]>(url);

    dispatch<IFetchTodoAction>({
      type: ActionTypes.FETCH_TODO_LIST,
      payload: response.data,
    });
  }
};