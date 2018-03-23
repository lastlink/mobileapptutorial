import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
export default (rootReducer, initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
};