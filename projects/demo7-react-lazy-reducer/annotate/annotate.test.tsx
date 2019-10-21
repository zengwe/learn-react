import React from 'react';
import ReactDOM from 'react-dom';
import { Annotate } from './annotate';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Annotate />, div);
  ReactDOM.unmountComponentAtNode(div);
});
