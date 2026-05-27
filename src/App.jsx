import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style/main.scss";
import Index from "./pages/Index/Index.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Projects from "./pages/Projects/Projects";
import Foundation from "./pages/Foundation/Foundation";
import Contact from "./pages/Contact/Contact";
import Wallet from "./pages/Wallet/Wallet";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Privacy from "./pages/Privacy/Privacy";
import Contribute from "./pages/Contribute/Contribute";
import NotFound from "./pages/NotFound/NotFound";
import Reader from "./pages/Reader/Reader";
import { handleHash } from "./helpers/Hash";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

function App() {
  useEffect(() => {
    handleHash();
  }, []);

  return (
    <Router>
      <>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/foundation" element={<Foundation />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/read/:folder/:file" element={<Reader />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
