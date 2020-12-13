import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'katex/dist/katex.min.css';

import Home from './pages/Home';
import Learn from './pages/Learn';
import TicTacToe from './pages/TicTacToe';
import './style.css';

const root = (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/learn" component={Learn} />
    <Route path="/tic-tac-toe" component={TicTacToe} />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
