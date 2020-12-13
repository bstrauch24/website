import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Join from '../Join';
import './style.css';

// TODO: Fix issues with refresh and back button
// TODO: Prevent WS error on other pages

const ws = new WebSocket('ws://localhost:1024/tic-tac-toe');

export default function TicTacToe() {
  const history = useHistory();
  const [id, setID] = useState('');
  const [hasJoined, setHasJoined] = useState(false);

  document.title = 'Tic-Tac-Toe';

  ws.onmessage = event => {
    const { type, body } = JSON.parse(event.data);
    console.log(type, body);

    if (type === 'error') {
      alert(body.message);
    } else if (type === 'join-ack') {
      setID(body.id);
      setHasJoined(true);
      history.push(`/tic-tac-toe/${body.id}`);
    } else if (type === 'join') {
      // TODO: add opponent
    } else {
      // TODO: move
    }
  }

  if (!hasJoined) {
    return <Join ws={ws} />;
  }

  return (
    <div>Tic-Tac-Toe: {id}</div>
  );
}
