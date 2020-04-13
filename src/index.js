import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>
          Hi, I'm<br />
          Brian.
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
