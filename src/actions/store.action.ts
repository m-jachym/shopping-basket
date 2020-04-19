import {FETCH_STORE, ADD_TO_BASKET} from '../constants/actionNames';
import {fetchStore} from '../services/store.service';

export const fetchStoreAction = () => ({
    type: FETCH_STORE,
    payload: fetchStore()
});

export const AddToBasketAction = item => ({
    type: ADD_TO_BASKET,
    payload: item
});
