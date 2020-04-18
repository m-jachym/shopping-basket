import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';
import promise from "redux-promise-middleware";
import logger from "redux-logger";

const store = createStore(reducers, applyMiddleware(
    promise,
    logger
));

export default store;