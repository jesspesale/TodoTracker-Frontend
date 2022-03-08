import { SET_TODOS } from "./constants";

export default function todoReducer(state = [], action){
    switch(action.type) {
        case SET_TODOS: 
            return action.payload

        default: 
            return state
    }

}