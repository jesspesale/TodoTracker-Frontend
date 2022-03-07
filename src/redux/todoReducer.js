import {SET_TODOS} from './constants'

export default function todoReducer(state = {todo: []}, action){
    switch(action.type) {
        case "SET_TODOS": 
        console.log(state)
            return action.payload
        break;

        default: 
            return state
    }

}