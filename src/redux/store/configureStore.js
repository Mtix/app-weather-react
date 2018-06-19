import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux';

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers(reducers),
        initialState,
        composeEnhancers(applyMiddleware(thunk)));
    
    return store
}