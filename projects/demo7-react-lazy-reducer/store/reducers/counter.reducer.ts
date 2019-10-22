export const counterReducer = function (state: any = { count: 1 }, action: any) {
  switch (action.type) {
    case 'COUNT_ADD':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}