import React from 'react';
import ReactDOM from 'react-dom';
import { ChildToParent } from './child-to-parent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChildToParent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
