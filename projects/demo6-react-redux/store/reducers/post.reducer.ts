export const postReducer = function(state: any = {list: [{title: 'hellow', id: -1}]}, action: any) {
    switch(action.type){
      case 'LOAD_POSTS': 
        return {
          ...state, list: action.payload
        }
    }
    return state;
  }