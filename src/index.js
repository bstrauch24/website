import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

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
      mode: 'bike',
      dist: 10,

      src: { lat: 40.113748, lon: -88.22925 },
      dst: { lat: undefined, lon: undefined },
    };
  }

  componentDidMount() {
    this.update();
  }

  changeMode = event => {
    this.setState({ mode: event.target.value }, () => {
      this.update();
    });
  }

  changeDist = event => {
    this.setState({ dist: event.target.value }, () => {
      this.update();
    });
  }

  update = () => {
    let { dist, src } = this.state;

    let p = Math.random();
    let dx = (Math.random() < 0.5 ? 1 : -1) * dist * p;
    let dy = (Math.random() < 0.5 ? 1 : -1) * dist * (1 - p);

    const EARTH_RADIUS = 3959;
    let dLat = this.radToDeg(dy / EARTH_RADIUS);
    let dLon = this.radToDeg(dx / EARTH_RADIUS);

    let dst = {
      lat: src.lat + dLat,
      lon: src.lon + dLon,
    };
    this.setState({ dst });
  }

  radToDeg = rad => {
    return rad * 180 / Math.PI;
  }

  render() {
    const { mode, dist, src, dst } = this.state;

    let modeId = (mode === 'bike' ? 1 : 2);
    let url = `https://www.google.com/maps/dir/${src.lat},${src.lon}/${dst.lat},${dst.lon}/data=4m2!4m1!3e${modeId}`;

    return (
      <div className="Random">
        I want to

        <select onChange={this.changeMode}>
          <option value="bike" selected={mode === 'bike'}>bike</option>
          <option value="run" selected={mode === 'run'}>run</option>
        </select>

        <input
          type="number"
          min="0"
          max="100"
          defaultValue={dist}
          onChange={this.changeDist}
        />

        miles.

        { url && <button onClick={() => window.open(url, '_blank')}>Go!</button> }
      </div>
    );
  }
}

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/random" component={Random} />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
