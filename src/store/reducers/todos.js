export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload;
    case 'ADD_TODOS':
      return [...state, action.payload];
    case 'DELETE_TODOS':
      return action.payload;
    default:
      return state;
  }
};
