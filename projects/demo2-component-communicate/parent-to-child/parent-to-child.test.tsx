import React from 'react';
import ReactDOM from 'react-dom';
import { ParentToChild } from './parent-to-child';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ParentToChild />, div);
  ReactDOM.unmountComponentAtNode(div);
});
