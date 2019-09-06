import React from 'react';
import ReactDOM from 'react-dom';
import { Controll } from './controll';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Controll />, div);
  ReactDOM.unmountComponentAtNode(div);
});
