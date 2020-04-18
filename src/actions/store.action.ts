import {FETCH_STORE} from '../constants/actionNames';
import {fetchStore} from '../services/store.service';

export const fetchStoreAction = () => ({
    type: FETCH_STORE,
    payload: fetchStore()
});
