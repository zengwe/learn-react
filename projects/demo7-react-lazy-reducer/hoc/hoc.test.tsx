import React from 'react';
import ReactDOM from 'react-dom';
import { Hoc } from './hoc';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hoc />, div);
  ReactDOM.unmountComponentAtNode(div);
});
