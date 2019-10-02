import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

it('render without crashing', () => {
  const app = document.createElement('app');
  ReactDOM.render(<App />, app);
  ReactDOM.unmountComponentAtNode(app);
});
