import { createStore, combineReducers } from 'redux'

import userReducer from './user-info/user-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    combineReducers({
        user: userReducer,
    }),
    composeWithDevTools(),
);

export default store;