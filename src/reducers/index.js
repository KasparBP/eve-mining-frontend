import { combineReducers } from 'redux'
import {
    RECEIVE_CHARACTER_INFO
} from '../actions'

function characterInfo(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CHARACTER_INFO:
            return Object.assign({}, state, {
                [action.characterInfo]: Object.assign({}, state, {
                    info: action.characterInfo
                })
            });
        default:
            return state
    }
}

export default combineReducers({
    characterInfo
})