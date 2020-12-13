import React from 'react';
import { BlockMath } from 'react-katex';

export default function Question() {
  return (
    <div className="Question">
      <div>
        <label htmlFor="answer">
          <BlockMath>3 \oplus 5</BlockMath>
        </label>
        <input id="answer" placeholder="Answer" />
      </div>
      <div id="check">
        <input type="submit" value="Check" />
      </div>
    </div>
  );
}
