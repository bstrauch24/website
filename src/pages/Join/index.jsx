import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './style.css';

export default function Join({ ws }) {
  const location = useLocation();
  const [id, setID] = useState(location.pathname.split('/')[2] || '');

  const join = event => {
    event.preventDefault();

    // TODO: Check before any packet is sent

    if (ws.readyState !== WebSocket.OPEN) {
      alert('Can\'t connect to the server.');
      return;
    }

    ws.send(JSON.stringify({
      type: 'join',
      body: id.length > 0 ? { 'id': id } : {},
    }));
  }

  // TODO: Optional Settings

  return (
    <div className="Join">
      <form onSubmit={join}>
        <input id="id" value={id} placeholder="Game ID" onChange={e => setID(e.target.value)} />
        <br />
        <input className="button" type="submit" value="Play" />
      </form>
    </div>
  );
}
