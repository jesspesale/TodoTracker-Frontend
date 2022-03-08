import {SET_TODOS} from './constants'

export function fetchTodos(){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/lists")
          .then((res) => res.json())
          .then((todos) => dispatch({ type: SET_TODOS, payload: todos }));
    }
}
