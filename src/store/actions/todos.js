const API = process.env.REACT_APP_API;

const getTodo = (payload) => {
  return {
    type: 'FETCH_TODOS',
    payload, 
  };
};

const addTodo = (payload) => {
  return {
    type: 'ADD_TODOS',
    payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: 'DELETE_TODOS',
    payload,
  }
};

//thunk for async fetch
const fetchTodos = () => (dispatch) => {
  return fetch(`${API}/api/v1/todo`)
    .then((results) => results.json())
    .then((data) => dispatch(getTodo(data)));
};

const addTodos = (todo) => (dispatch) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/todo`, options)
    .then((results) => results.json())
    .then((data) => dispatch(addTodo(data)));
};

const deleteTodos = (id) => (dispatch) => {
  const options = {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/todo`, options)
    .then((results) => results.json())
    .then((delteId) => dispatch(deleteTodo(delteId)));
};

export default {
  fetchTodos,
  addTodos,
  deleteTodos,
};
