import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.css';

function Home() {
  return (
    <div className="Home">
      Hi, I'm Brian. I study Computer Science at the <a href="https://illinois.edu/">University of Illinois</a>.
      I'm interested in open source software, distributed computing, and digital sovereignty.
      In the past, I've interned at <a href="https://www.cmegroup.com/">CME Group</a> and <a href="https://www.facebook.com/">Facebook</a>, and I'm currently working remotely at <a href="https://www.confluent.io/">Confluent</a>!
      In 2020, I directed the systems team for <a href="https://2020.hackillinois.org/">HackIllinois</a>, an open source focused hackathon.
      You can usually find me swimming, biking, or running.
    </div>
  );
}

class Random extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: undefined
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      let { latitude, longitude } = position.coords;
      this.setState({ src: { lat: latitude, lon: longitude } });
    }, err => {
      this.setState({ src: { lat: err.code, lon: '' } });
    });
  }

  render() {
    const { src } = this.state;

    return (
      <div className="Random">
        { src && <div>Your location: <span>{src.lat}, {src.lon}</span></div> }
      </div>
    );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/random">
          <Random />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
