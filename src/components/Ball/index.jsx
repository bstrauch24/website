import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './style.css';

const link = 'https://github.com/bstrauch24';

function Ball(props) {
  const { x, y, r } = props;

  const style = {
    position: 'absolute',
    left: x - r,
    top: y - r,
    width: (2 * r) + 'px',
    height: (2 * r) + 'px'
  };

  return (
    <div className="Ball" style={style}>
      <a href={link}>
        <FontAwesomeIcon className="icon" icon={faGithub} />
      </a>
    </div>
  );
}

export default Ball;
