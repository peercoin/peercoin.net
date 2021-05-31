import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.scss";
import Index from "./pages/Index/Index.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Projects from "./pages/Projects/Projects";
import Foundation from "./pages/Foundation/Foundation";
import Bounty from "./pages/Bounty/Bounty";
import Contact from "./pages/Contact/Contact";
import Wallet from "./pages/Wallet/Wallet";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Privacy from "./pages/Privacy/Privacy";
import Contribute from "./pages/Contribute/Contribute";
import NotFound from "./pages/NotFound/NotFound";
import { handleHash } from "./helpers/Hash";

function App() {
  useEffect(() => {
    handleHash();
  }, []);

  return (
    <Router>
      <>
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/resources" component={Resources} />
          <Route path="/projects" component={Projects} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/foundation" component={Foundation} />
          <Route path="/bounty" component={Bounty} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/contact" component={Contact} />
          <Route path="/contribute" component={Contribute} />
          <Route path="/*" component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
