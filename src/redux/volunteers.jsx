import * as ActionTypes from './ActionTypes';

export const Volunteers = (state = {
                        isLoading: true,
                        errMess: null,
                        volunteers: []
                        }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_VOLUNTEERS:
            return {...state, isLoading: false, errMess: null, volunteers: action.payload};
        case ActionTypes.VOLUNTEERS_LOADING:
            return {...state, isLoading: true, errMess: null, volunteers: []};
        default:
            return state;
    }
};