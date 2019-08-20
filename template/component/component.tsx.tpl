import React from 'react';
import './<%= name %>.scss';

export const <%= afterParseName %>: React.FC = () => {
  return (
    <div className="<%= afterParseName %>">
      <header className="App-header">
        <p>
          <%= name%> component!;
        </p>
      </header>
    </div>
  );
}
