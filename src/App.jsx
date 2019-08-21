import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/main.scss';
import Index from './pages/Index/Index.jsx';
import Resources from './pages/Resources/Resources.jsx';
import Projects from './pages/Projects/Projects';
import Foundation from './pages/Foundation/Foundation';
import Contact from './pages/Contact/Contact';
import Wallet from './pages/Wallet/Wallet';
import ScrollTop from './components/ScrollTop/ScrollTop';

function App() {
  return (
    <Router>
      <>
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/resources" component={Resources} />
          <Route path="/projects" component={Projects} />
          <Route path="/foundation" component={Foundation} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
