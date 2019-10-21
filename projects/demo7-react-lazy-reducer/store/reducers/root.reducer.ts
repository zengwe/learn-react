import { counterReducer } from './counter.reducer';
import { postReducer } from './post.reducer';
import { combineReducers } from 'redux';
export const notCombin = {
    counter: counterReducer,
    post: postReducer
}
export const RootReducer = combineReducers({
    counter: counterReducer,
    post: postReducer
});