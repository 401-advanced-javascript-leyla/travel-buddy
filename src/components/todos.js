import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import todoActions from '../store/actions/todos';

const Todos = (props) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoContent, setTodoContent] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodos({ title: todoTitle, content: todoContent });
  }

  function handleTitleChange(e) {
    return setTodoTitle(e.target.value);
  }
  function handleContentChange(e) {
    return setTodoContent(e.target.value);
  }


  useEffect(() => {
    props.fetchTodos();
  }, []);

  return (
    <>
      <ul>
        {props.todos.map((todo, idx) => (
          <li key={idx}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='enter todo title'
          value={todoTitle}
          onChange={handleTitleChange}
        />
        <input 
          type='text'
          placeholder='enter todo content'
          value={todoContent}
          onChange={handleContentChange}
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
  deleteTodos: (id) => dispatch(todoActions.deleteTodos(id)),
});

Todos.propTypes = {
  fetchTodos: PropTypes.func,
  todos: PropTypes.array,
  addTodos: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToPros)(Todos);
