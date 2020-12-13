import React, { useState } from 'react';

// TODO: Use BlockMath

export default function Question({ id, text }) {
  const [answer, setAnswer] = useState('');

  const onAnswer = event => {
    event.preventDefault();

    fetch('http://localhost:1024/learn/answer', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        answer: answer,
      }),
    }).catch(err => {
      alert(err);
    });
  }

  return (
    <div className="Question">
      <div id="text">
        {id}: {text}
      </div>

      <form onSubmit={onAnswer}>
        <input id="answer" value={answer} placeholder="Answer" onChange={e => setAnswer(e.target.value)} />
        <input id="check" type="submit" value="Check" />
      </form>
    </div>
  );
}
