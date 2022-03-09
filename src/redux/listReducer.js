import { GET_LISTS } from "../constants"

export default function listReducer(state = {lists: []}, action){
    switch(action.type) {
        case GET_LISTS:
            return {
                ...state,
                lists: action.payload
            }

        default: 
            return state
    }

}