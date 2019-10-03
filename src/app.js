import React from 'react';

import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginProvider from './components/auth/context';
import Todos from './components/todos';

class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <Login />
        <Auth capability='read'>
          <Todos />
        </Auth>
      </LoginProvider>
    );
  }
}

export default App;
