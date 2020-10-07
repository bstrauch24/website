import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './style.css';

function Home() {
  return (
    <div className="Home">
      Hi, I'm Brian. I study Computer Science at the <a href="https://illinois.edu/">University of Illinois</a>.
      I'm interested in open source software and distributed computing.
      In the past, I've interned at <a href="https://www.cmegroup.com/">CME Group</a>, <a href="https://www.facebook.com/">Facebook</a>, and <a href="https://www.confluent.io/">Confluent</a>!
      Last year, I directed the systems team for <a href="https://2020.hackillinois.org/">HackIllinois</a>, an open source focused hackathon.
      In my spare time I do a lot of <a href="https://www.strava.com/athletes/brianstrauch">swimming, biking, and running</a>.
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
