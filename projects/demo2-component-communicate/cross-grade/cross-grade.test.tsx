import React from 'react';
import ReactDOM from 'react-dom';
import { CrossGrade } from './cross-grade';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CrossGrade />, div);
  ReactDOM.unmountComponentAtNode(div);
});
