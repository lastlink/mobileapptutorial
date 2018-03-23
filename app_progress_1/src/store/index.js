import configureStore from './configureStore';
import rootReducer from './combineReducers';

const store = configureStore(rootReducer);

export default store;