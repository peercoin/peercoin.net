import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './pages/Index/Index.jsx';
import About from './pages/About/About.jsx';
import './style/main.scss';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
