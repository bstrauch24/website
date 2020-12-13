import React, { useState } from 'react';

import Question from '../../components/Question';
import './style.css';

export default function Learn() {
  const [question, setQuestion] = useState({
    id: '00000',
    text: 'Example question!',
  });

  fetch('http://localhost:1024/learn/random').then(res => {
    if (res.ok) {
      setQuestion(res.json());
    }
  }).catch(err => {
    console.log(err);
  });

  return (
    <div>
      { question && <Question {...question} /> }
    </div>
  );
}
