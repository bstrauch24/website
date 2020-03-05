import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="landing">
          <h1>
            Hi, I'm<br />
            Brian.
          </h1>
        </div>

        <div className="blog">
          <h2>Blog</h2>
          <p>Coming soon!</p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
