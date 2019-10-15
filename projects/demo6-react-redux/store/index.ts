import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {RootReducer }  from './reducers/root.reducer';
export const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(...[thunk]),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    )
);