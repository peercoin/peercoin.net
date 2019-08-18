import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/main.scss';
import Index from './pages/Index/Index.jsx';
import Resources from './pages/Resources/Resources.jsx';
import Projects from './pages/Projects/Projects';
import Foundation from './pages/Foundation/Foundation';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Index} />
      <Route path="/resources" component={Resources} />
      <Route path="/projects" component={Projects} />
      <Route path="/foundation" component={Foundation} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
