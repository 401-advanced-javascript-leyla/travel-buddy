import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import todoActions from '../store/actions/todos';
import Day from './dayForm';

const Todos = (props) => {
  const [todoDay, setTodoDay] = useState('');
  const [todoPlan, setTodoPlan] = useState('');

  const [todoDayTem, setTodoDayTem] = useState('');
  const [todoPlanTem, setTodoPlanTem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
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

  function handleTodoSubmit(e, id, day, plan) {
    e.preventDefault();
    props.updateTodos(id, day, plan);
    setTodoDay(day);
    setTodoPlan(plan);
  }


  useEffect(() => {
    props.fetchTodos();
  }, [todoDay, todoPlan]);

  return (
    <>
      <ul>
        {props.todos.map((todo, i) => (
          <form key={i}>
            <Day todo={todo} editDay={todoDay} handleTodoSubmit={handleTodoSubmit} />
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
  updateTodos: (id, day, plan) => dispatch(todoActions.updateTodos(id, day, plan)),
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
