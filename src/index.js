import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './style.css';

function Home() {
  return (
    <div className="Home">
      Hi, I'm Brian. I study Computer Science at the <a href="https://illinois.edu/">University of Illinois</a>.
      I'm interested in open source software and distributed computing.
      In the past, I've interned at <a href="https://www.cmegroup.com/">CME Group</a> and <a href="https://www.facebook.com/">Facebook</a>, and I'm currently working remotely at <a href="https://www.confluent.io/">Confluent</a>!
      Last year, I directed the systems team for <a href="https://2020.hackillinois.org/">HackIllinois</a>, an open source focused hackathon.
      In my spare time I do a lot of <a href="/random">running and biking</a>.
    </div>
  );
}

class Random extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'bicycling',
      dist: 10,
      addr: '610 E Stoughton St, Champaign, IL',
      save: [undefined, undefined], // [addr, src]
    };
  }

  changeMode = event => {
    this.setState({ mode: event.target.value });
  }

  changeDist = event => {
    this.setState({ dist: event.target.value });
  }

  changeAddr = event => {
    this.setState({ addr: event.target.value });
  }

  go = () => {
    const { addr, save } = this.state;

    if (save[0] === addr) {
      this.generate(save[1]);
      return;
    }

    fetch(`https://nominatim.openstreetmap.org/search?q=${addr}&format=json`).then(res => res.json()).then(res => {
      const src = {
        lat: Number(res[0]['lat']),
        lon: Number(res[0]['lon']),
      };
      this.setState({ save: [addr, src] });
      this.generate(src);
    });
  }

  generate = src => {
    const { mode, dist, addr } = this.state;

    const distOneWay = dist / 2.0;

    const p = Math.random();
    const dx = (Math.random() < 0.5 ? 1 : -1) * distOneWay * p;
    const dy = (Math.random() < 0.5 ? 1 : -1) * distOneWay * (1 - p);

    const EARTH_RADIUS = 3959;
    const dLat = this.radToDeg(dy / EARTH_RADIUS);
    const dLon = this.radToDeg(dx / EARTH_RADIUS);

    const dst = {
      lat: src.lat + dLat,
      lon: src.lon + dLon,
    };

    window.open(`https://www.google.com/maps/dir/?api=1&origin=${addr}&waypoints=${dst.lat},${dst.lon}&destination=${addr}&travelmode=${mode}`, '_self');
  }

  radToDeg = rad => {
    return rad * 180 / Math.PI;
  }

  render() {
    const { mode, dist, addr } = this.state;

    return (
      <div className="Random">
        I want to

        <select defaultValue={mode} onChange={this.changeMode}>
          <option value="bicycling">bike</option>
          <option value="walking">run</option>
        </select>

        <input
          defaultValue={dist}
          onChange={this.changeDist}
          type="number"
          min="0"
          max="100"
        />

        miles, starting at

        <input
          id="addr"
          defaultValue={addr}
          onChange={this.changeAddr}
        />

        <button onClick={this.go}>Go!</button>
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
