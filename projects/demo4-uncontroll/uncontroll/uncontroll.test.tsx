import React from 'react';
import ReactDOM from 'react-dom';
import { Uncontroll } from './uncontroll';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Uncontroll />, div);
  ReactDOM.unmountComponentAtNode(div);
});
