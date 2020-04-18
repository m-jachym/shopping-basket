import {FETCH_STORE} from '../constants/actionNames';

const INITIAL_STATE = {
    error: false,
    loading: false,
    fetched: false,
    store: null,
};

export const storeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STORE + '_ERROR':
            return {...state, error: true, loading: false, fetched: false};
        case FETCH_STORE + '_LOADING':
            return {...state, error: false, loading: true, fetched: false};
        case FETCH_STORE + '_FULFILLED':
            return {...state, store: action.payload.data};
        default:
            return state;
    }
};