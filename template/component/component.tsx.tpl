import React from 'react';
import './<%= name %>.scss';

export interface I<%= afterParseName %>Props {

}
export interface I<%= afterParseName %>State {

}
export class <%= afterParseName %> extends React.Component<I<%= afterParseName %>Props, I<%= afterParseName %>State> {
  constructor(props: I<%= afterParseName %>Props, state: I<%= afterParseName %>State) {
    super(props, state);
  }
  render() {
    return (
      <div><%= name %> works!</div>
    );
  }
}
