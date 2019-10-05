export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload;
    case 'ADD_TODOS':
      return [...state, action.payload];
    case 'UPDATE_TODOS': {
      const newState = state.filter((todo) => {
        return action.payload.id !== todo.id;
      });
      const final = [...newState, action.payload];
      return final;
    }
    case 'DELETE_TODOS': {
      const newState = state.filter((todo) => (action.payload) !== todo._id);
      return newState;
    }
    default:
      return state;
  }
};
