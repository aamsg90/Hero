import * as ActionTypes from './ActionTypes';

export const Faqs = (state = {
        isLoading: true,
        errMess: null,
        faqs: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAQS:
            return {...state, isLoading: false, errMess: null, faqs: action.payload};
        case ActionTypes.FAQS_LOADING:
            return {...state, isLoading: true, errMess: null, faqs: []};
        default:
            return state;
    }
}  