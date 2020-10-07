import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'katex/dist/katex.min.css';

import Home from './scenes/Home';
import Learn from './scenes/Learn';
import './style.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/learn" component={Learn} />
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
