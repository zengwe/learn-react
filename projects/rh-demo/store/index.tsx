import { createStore, compose, applyMiddleware, Action, combineReducers, ReducersMapObject, Reducer, AnyAction } from 'redux';
import thunk from 'redux-thunk';
export interface ICounterAction extends Action {
    type: 'ADD'|'DESC',
    payload: number
}
const reducer: {count: Reducer<number, ICounterAction>} = {
    count: (state: number = 0, action: ICounterAction) => {
        switch(action.type) {
            case 'ADD': 
                return state + action.payload;
            case 'DESC': 
                return state - action.payload;
        }
        return state;
    }
}
export const store = createStore(
    combineReducers(reducer),
    compose(
        applyMiddleware(...[thunk]),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    )
);


