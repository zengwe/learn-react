import React from 'react';
import ReactDOM from 'react-dom';
import { EventComp } from './event-comp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
