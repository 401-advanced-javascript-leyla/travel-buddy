import React from 'react';

// import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';
import Todos from './components/todos';

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Login>
          <Todos />
        </Login>
      </LoginProvider>
    );
  }
}

export default App;
