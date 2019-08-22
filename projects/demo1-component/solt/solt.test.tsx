import React from 'react';
import ReactDOM from 'react-dom';
import { Solt } from './solt';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Solt />, div);
  ReactDOM.unmountComponentAtNode(div);
});
