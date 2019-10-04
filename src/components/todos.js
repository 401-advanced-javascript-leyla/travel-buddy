import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import todoActions from '../store/actions/todos';

const Todos = (props) => {
  const [todoDay, setTodoDay] = useState('');
  const [todoPlan, setTodoPlan] = useState('');

  const [todoDayTem, setTodoDayTem] = useState('');
  const [todoPlanTem, setTodoPlanTem] = useState('');

  function handleSubmit() {
    props.addTodos({ id: uuid(), day: todoDayTem, plan: todoPlanTem });
  }

  function handleDayChange(e) {
    return setTodoDayTem(e.target.value);
  }
  function handlePlanChange(e) {
    return setTodoPlanTem(e.target.value);
  }
  function handleDelete(e) {
    return props.deleteTodos(e.target.value);
  }
  function handleDayEdit(e) {
    return setTodoDay(e.target.value);
  }
  function handlePlanEdit(e) {
    return setTodoPlan(e.target.value);
  }
  function handleDaySubmit(e) {
    e.preventDefault();
    props.updateTodos(e.target.value, { day: todoDay });
  }

  function handlePlanSubmit(e) {
    e.preventDefault();
    props.updateTodos(e.target.value, { plan: todoPlan });
  }


  useEffect(() => {
    props.fetchTodos();
  }, [todoDay, todoPlan]);

  return (
    <>
      <ul>
        {props.todos.map((todo) => (
          <form key={todo._id}>
            <p>{todo.day}:</p>
            <input type='text' value={todoDay} onChange={handleDayEdit} />
            <button value={todo._id} onClick={handleDaySubmit}>Edit Day</button>
            
            <p>{todo.plan}</p>
            <input type='text' value={todoPlan} onChange={handlePlanEdit} />
            <button value={todo._id} onClick={handlePlanSubmit}>Edit Plan</button>
            <br />
            <br />
            <button value={todo._id} onClick={handleDelete}>Delete Plan</button>
          </form>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='enter day'
          value={todoDayTem}
          onChange={handleDayChange}
        />
        <input 
          type='text'
          placeholder='enter plan'
          value={todoPlanTem}
          onChange={handlePlanChange}
        />
        <button type='submit'>Submit</button>
      </form>        
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToPros = (dispatch) => ({
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
  addTodos: (data) => dispatch(todoActions.addTodos(data)),
  updateTodos: (id, data) => dispatch(todoActions.updateTodos(id, data)),
  deleteTodos: (id) => dispatch(todoActions.deleteTodos(id)),
});

Todos.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array,
  addTodos: PropTypes.func,
  updateTodos: PropTypes.func,
  deleteTodos: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToPros)(Todos);
