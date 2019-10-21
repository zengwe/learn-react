import axios from 'axios';
export const loadPostsAction = (dispatch: any) => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res: any) => {
        dispatch({
            type: 'LOAD_POSTS',
            payload: res.data
        });
    });
}
export const clearPostList = (dispatch: any) => {
    dispatch({
        type: 'CLEAR_POSTS',
        payload: []
    })
}