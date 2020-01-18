import React from 'react';

import github from '../../assets/github.svg';

function Ball(props) {
  const link = 'https://github.com/bstrauch24';
  const { x, y, r } = props;

  const style = {
    width: (2 * r) + 'px',
    position: 'absolute',
    left: x - r,
    top: y - r
  };

  return (
    <div className="Ball" style={style}>
      <a href={link}>
        <img src={github} alt="github" />
      </a>
    </div>
  );
}

export default Ball;
