import React from 'react';
import './App.scss';
import { Regular } from './regular/regular';
import { EventComp } from './event-comp/event-comp';
import { Solt } from './solt/solt';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="regular">
          <Regular />
          <Regular></Regular>
        </div>
        <div className="event-cop">
          <EventComp></EventComp>
        </div>
        <div className="solt">
          <Solt>
            <Regular />
          </Solt>
          <Solt>
            <Regular />
            <Regular />
          </Solt>
        </div>
      </div>
    );
  }
}
export default App;
