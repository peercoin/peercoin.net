import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/main.scss';
import Index from './pages/Index/Index.jsx';
import Resources from './pages/Resources/Resources.jsx';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/resources" component={Resources} />
    </Router>
  );
}

export default App;
