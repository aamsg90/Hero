// Create Members reducer - splitting reducer.js, note where the file path is
import * as ActionTypes from './ActionTypes';

export const Members = (state = {
        isLoading: true,
        errMess: null,
        members: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MEMBERS:
            return {...state, isLoading: false, errMess: null, members: action.payload};
        default:
            return state;
    }
}  