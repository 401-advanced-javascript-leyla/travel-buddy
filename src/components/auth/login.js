import React from 'react';
import { LoginContext } from './context';

const If = (props) => {
  return props.condition ? props.children : null;
};

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e, type) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password, type);
  };
  
  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </If>

        <If condition={!this.context.loggedIn}>
          <form>
            <input 
              placeholder='Username'
              name='username'
              onChange={this.handleChange}
            />
            <input 
              placeholder='Password'
              name='password'
              type='password'
              onChange={this.handleChange}
            />
            <button onClick={(event) => this.handleSubmit(event, 'signup')} >Sign up</button>
            <button onClick={(event) => this.handleSubmit(event, 'signin')}>Sign in</button>
          </form>
        </If>
      </>
    );
  }
}

export default Login;
