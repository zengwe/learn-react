export const ContainerReducer = function (state: any = { name: 'container reducer' }, action: any) {
    switch (action.type) {
      case 'COUNT_ADD':
        return { ...state, count: state.count + 1 };
      default:
        return state;
    }
  }