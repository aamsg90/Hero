import * as ActionTypes from './ActionTypes';
import { SPONSORS } from '../shared/sponsorsData';
import { MEMBERS } from '../shared/membersData';
import { FAQS } from '../shared/faqsData'; 
import { VOLUNTEERS } from '../shared/volunteersData'; 

// action creators
export const fetchSponsors = () => dispatch => {
    dispatch(addSponsors(SPONSORS));
};

export const addSponsors = sponsors => ({
    type: ActionTypes.ADD_SPONSORS,
    payload: sponsors

});


export const fetchMembers = () => dispatch => {
    dispatch(addMembers(MEMBERS));
}

export const addMembers = members => ({
    type: ActionTypes.ADD_MEMBERS,
    payload: members

});

export const fetchFaqs = () => dispatch => {
    dispatch(faqsLoading());
    dispatch(addFaqs(FAQS));
}

export const faqsLoading = () => ({
    type: ActionTypes.FAQS_LOADING
});

export const addFaqs = faqs => ({
    type: ActionTypes.ADD_FAQS,
    payload: faqs

});


export const fetchVolunteers = () => dispatch => {
    dispatch(volunteersLoading());

    setTimeout(() => {
        dispatch(addVolunteers(VOLUNTEERS));
    }, 2000);
}

export const volunteersLoading = () => ({
    type: ActionTypes.VOLUNTEERS_LOADING
});

export const addVolunteers = volunteers => ({
    type: ActionTypes.ADD_VOLUNTEERS,
    payload: volunteers

});
