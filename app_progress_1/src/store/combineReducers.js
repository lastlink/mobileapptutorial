import { combineReducers } from 'redux';

import navReducer from '../reducers/nav';
import authReducer from '../reducers/auth';

export default combineReducers({
    nav: navReducer,
    auth: authReducer,
});