import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import generalesStore from '../common/store';

const rootReducer = combineReducers({
    generales: generalesStore
});

export default createStore(rootReducer, compose(applyMiddleware(thunk)));