import React from "react";
import HeroSection from "./components/pages/home/heroSection.js";
import Section3 from "./components/pages/home/section3/section3.js";
import Section4 from "./components/pages/home/section4/section4.js";

import en from "./languages/en";
import es from "./languages/es";
import pt from "./languages/pt";
import de from "./languages/de";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let language = window.location.search;

    language = language.substring(language.length, language.length - 2);

    switch (language) {
      case "es":
        this.setState({ languageObj: es, lang: "es" });
        break;
      case "en":
        this.setState({ languageObj: en, lang: "en" });
        break;
      case "pt":
        this.setState({ languageObj: pt, lang: "pt" });
        break;
      case "de":
        this.setState({ languageObj: de, lang: "de" });
        break;
      default:
        this.setState({ languageObj: en });
    }
  }
  componentDidMount() {
    console.log("did mount");
  }

  render() {
    return (
      <div>
        <HeroSection language={this.state.languageObj} lang={this.state.lang} />
        <Section3 language={this.state.languageObj} />
        <Section4 />
      </div>
    );
  }
}

export default App;
