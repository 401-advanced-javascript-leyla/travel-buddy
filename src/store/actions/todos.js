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

const updateTodo = (payload) => {
  console.log(payload);
  return {
    type: 'UPDATE_TODOS',
    payload,
  };
};

const deleteTodo = (payload) => {
  return {
    type: 'DELETE_TODOS',
    payload,
  };
};

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
    .then(() => dispatch(addTodo(todo)));
};

const updateTodos = (id, day, plan) => (dispatch) => {
  const payload = {
    id,
    day,
    plan,
  };

  const options = {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  return fetch(`${API}/api/v1/todo/${id}`, options)
    .then(() => {
      dispatch(updateTodo(payload));
    });
};

const deleteTodos = (id) => (dispatch) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(`${API}/api/v1/todo/${id}`, options)
    .then(() => dispatch(deleteTodo(id)));
};

export default {
  fetchTodos,
  addTodos,
  updateTodos,
  deleteTodos,
};
