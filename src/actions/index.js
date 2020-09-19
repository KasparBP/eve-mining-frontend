import axios from "axios";

export const REQUEST_CHARACTER_INFO = 'REQUEST_CHARACTER_INFO';
function requestCharacterInfo() {
    return {
        type: REQUEST_CHARACTER_INFO
    }
}

export const RECEIVE_CHARACTER_INFO = 'RECEIVE_CHARACTER_INFO';
function receiveCharacterInfo(json) {
    return {
        type: RECEIVE_CHARACTER_INFO,
        info: json,
        receivedAt: Date.now()
    }
}

export function fetchCharacterInfo() {
    return function (dispatch) {
        dispatch(requestCharacterInfo());
        return axios.get("http://localhost:8080/api/v1/character", {withCredentials: true})
            .then(
                response => response.data
            )
            .then(json =>
                dispatch(receiveCharacterInfo(json))
            )
    }
}
