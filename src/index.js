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
      ball: {x: 100, y: 200, vx: -1, vy: 1, r: 50}
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.animate();
  }

  render() {
    const { ball } = this.state;

    return (
      <div className="App">
        <h1>Hi, I'm<br />Brian.</h1>
        <Ball {...ball} />
      </div>
    );
  }

  handleResize = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight
    });
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    const { ball } = this.state;

    if (this.didCollideOnX(ball)) {
      ball.vx = -ball.vx;
    }
    if (this.didCollideOnY(ball)) {
      ball.vy = -ball.vy;
    }

    ball.x += ball.vx;
    ball.y += ball.vy;

    this.setState({ ball });
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
