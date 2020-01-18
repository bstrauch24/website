import React from 'react';
import ReactDOM from 'react-dom';

import Ball from './components/Ball';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
      balls: [
        {x: 100, y: 100, vx: 1, vy: -3, r: 24},
        {x: 100, y: 200, vx: -1, vy: 2, r: 48},
      ]
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.animate();
  }

  render() {
    const { balls } = this.state;

    return (
      <div className="App">
        <h1>Hi, I'm<br />Brian.</h1>
        {balls.map((data, idx) => <Ball key={idx} {...data} />)}
      </div>
    );
  }

  handleResize = () => {
    const { balls } = this.state;

    for (let i in balls) {
      const ball = balls[i];
      if (this.didCollideOnX(ball) || this.didCollideOnY(ball)) {
        balls.splice(i, 1);
      }
    }

    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
      balls
    });
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    const { w, h, balls } = this.state;

    for (let ball of balls) {
      if (this.didCollideOnX(ball)) {
        ball.vx = -ball.vx;
      }
      if (this.didCollideOnY(ball)) {
        ball.vy = -ball.vy;
      }

      ball.x += ball.vx;
      ball.y += ball.vy;
    }

    this.setState({ balls });
  }

  didCollideOnX = ball => {
    const { w } = this.state;
    return ball.x + ball.vx - ball.r < 0 || ball.x + ball.vx + ball.r >= w;
  }

  didCollideOnY = ball => {
    const { h } = this.state;
    return ball.y + ball.vy - ball.r < 0 || ball.y + ball.vy + ball.r >= h;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
