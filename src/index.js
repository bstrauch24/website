import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Hi, I'm Brian! I study Computer Science at the <a href="https://illinois.edu/">University of Illinois</a>.
        I'm interested in open source software, distributed computing, and digital sovereignty.
        In the past, I've interned at <a href="https://www.cmegroup.com/">CME Group</a> and <a href="https://www.facebook.com/">Facebook</a>, and I'm headed to <a href="https://www.confluent.io/">Confluent</a> next!
        In 2020, I directed the systems team for <a href="https://2020.hackillinois.org/">HackIllinois</a>, an open source focused hackathon.
        You can usually find me swimming, biking, or running.
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
