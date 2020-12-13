import { useState } from 'react';

import X from '../components/x';
import O from '../components/o';

import './Game.css';

export default function Game() {
  const [opponent, setOpponent] = useState('Brian');
  const [symbol, setSymbol] = useState('');

  // TODO: Get game ID with useParams, display an error if game doesn't exist

  // TODO: Listener for 'start' event, get symbol
  // TODO: Listener for 'move' event

  // const outcome = true ? "You won!" : "You lost."
  // confirm(outcome + " Play again?")

  let message = 'Your Turn (' + symbol + ')';
  if (true) {
    message = opponent + '\'s Turn (' + (symbol === 'X' ? 'O' : 'X') + ')';
  }

  return (
    <div className="Game">
      <table>
        <tbody>
          <tr><Cell /><Cell /><Cell /></tr>
          <tr><Cell /><Cell /><Cell /></tr>
          <tr><Cell /><Cell /><Cell /></tr>
        </tbody>
      </table>
      <div className="message">{message}</div>
    </div>
  );
}

function Cell() {
  const [hint, setHint] = useState('');
  const [text, setText] = useState('');

  return (
    <td
      onClick={() => setText('O')}
      onMouseEnter={() => setHint('X')}
      onMouseLeave={() => setHint('')}
    >
      {(text && symbol(text, 'black')) || (hint && symbol(hint, 'gray'))}
    </td>
  );
}

function symbol(letter, color) {
  return letter === 'X' ? <X color={color} /> : <O color={color} />;
}
