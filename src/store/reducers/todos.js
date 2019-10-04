export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload;
    case 'ADD_TODOS':
      return [...state, action.payload];
    case 'UPDATE_TODOS': {
      const newState = state.map((todo) => {
        if (todo._id === action.payload.id) {
          // console.log();
          todo.plan = action.payload.todo;
        }
        return todo;
      });
      return newState;
    }
    case 'DELETE_TODOS': {
      const newState = state.filter((todo) => (action.payload) !== todo._id);
      return newState;
    }
    default:
      return state;
  }
};
