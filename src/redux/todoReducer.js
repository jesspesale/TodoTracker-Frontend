import { SET_TODOS, ADD_TODO } from "./constants";


export default function todoReducer(state = [], action){
    switch(action.type) {
        case SET_TODOS: 
            return action.payload
        case ADD_TODO:
            return [...state, action.payload]
        default: 
            return state
    }

}