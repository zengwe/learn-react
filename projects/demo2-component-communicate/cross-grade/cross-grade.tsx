import React from 'react';
import './cross-grade.scss';
import { Parent } from './parent/parent';
import PropTypes from 'prop-types';
export interface ICrossGradeProps {
  
}
export interface ICrossGradeState {
  count: number;
  myname: string;
}
export class CrossGrade extends React.Component<ICrossGradeProps, ICrossGradeState> {
  // constructor(props: ICrossGradeProps, state: ICrossGradeState) {
  //   super(props, state);
  // }
  state = {count: 1, myname: 'CrossGrade'};
  static childContextTypes = {
    count: PropTypes.number,
    name: PropTypes.string
  }
  getChildContext() {
    return {
      count: this.state.count,
      name: this.state.myname
    }
  }
  render() {
    return (
      <div>
        cross-grade works!
        <Parent />
      </div>
    );
  }
}
