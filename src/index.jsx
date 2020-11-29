import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'katex/dist/katex.min.css';

import Home from './pages/Home';
import Learn from './pages/Learn';
import './style.css';

const root = (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/learn" component={Learn} />
  </BrowserRouter>
);

ReactDOM.render(root, document.getElementById('root'));
