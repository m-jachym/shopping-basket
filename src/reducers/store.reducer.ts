import {FETCH_STORE, ADD_TO_BASKET} from '../constants/actionNames';

const INITIAL_STATE = {
    error: false,
    loading: false,
    fetched: false,
    store: null,
    basket: [],
};

export const storeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_STORE + '_ERROR':
            return {...INITIAL_STATE, error: true, loading: false, fetched: false};
        case FETCH_STORE + '_LOADING':
            return {...INITIAL_STATE, error: false, loading: true, fetched: false};
        case FETCH_STORE + '_FULFILLED':
            return {...INITIAL_STATE, store: action.payload.data};
        case ADD_TO_BASKET:
            const basket = state.basket;
			const isElementSelected = basket.find((item) => item === action.payload);
			const removeElement = basket.filter(item => item !== action.payload);

			return (
                isElementSelected ? {...state, basket: removeElement} 
                : 
                {...state, basket: [...basket, action.payload]}
			);
        default:
            return state;
    }
};