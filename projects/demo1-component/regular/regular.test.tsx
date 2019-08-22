import React from 'react';
import ReactDOM from 'react-dom';
import { Regular } from './regular';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Regular />, div);
  ReactDOM.unmountComponentAtNode(div);
});
