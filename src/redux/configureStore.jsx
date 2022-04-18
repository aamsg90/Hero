import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Sponsors } from './sponsors';
import { Members } from './members';
import { Faqs } from './faqs';
import { Volunteers } from './volunteers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// ConfigureStore 
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            sponsors: Sponsors,
            members: Members,
            faqs: Faqs,
            volunteers: Volunteers
        }),
        applyMiddleware(thunk, logger)  
    );

    return store;
};