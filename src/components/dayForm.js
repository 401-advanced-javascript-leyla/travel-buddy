import React from 'react';
import PropTypes from 'prop-types';

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.day = '';
    this.state.plan = '';
  }

  componentDidMount = () => {
    this.setState({ day: this.props.todo.day, plan: this.props.todo.plan });
  }

  handleDayEdit = (e) => {
    this.setState({ day: e.target.value });
  }

  handlePlanEdit = (e) => {
    this.setState({ plan: e.target.value });
  }

  render() {
    const { id, day, plan } = this.props.todo;
    return (
      <>
        <p>{day}:</p>
        <input type='text' value={this.state.day} onChange={this.handleDayEdit} />
        <p>{plan}</p>
        <input type='text' value={this.state.plan} onChange={this.handlePlanEdit} />
        <button value={id} onClick={(event) => {
          this.props.handleTodoSubmit(event, id, this.state.day, this.state.plan); 
        }}>Edit Day</button>
      </>
    );
  }
}

Day.propTypes = {
  handleTodoSubmit: PropTypes.func,
  todo: PropTypes.object,
};
