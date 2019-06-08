import React from "react";
// import Particles from 'react-particles-js';
import logo from "../../../assets/images/logo_main.svg";
import Header from "../../common/header";

class HeroSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.language,
      lang: this.props.lang
    };
  }

  render() {
    const herosection = this.state.language.herosection;

    return (
      <section id="first">
        <Header lang={this.state.lang} />
        <div id="header-content" className="center-content">
          <img
            className="main_logo"
            src={logo}
            alt=""
            style={{ marginTop: "15vh", marginBottom: "7vh" }}
          />

          <h1
            className="title_home"
            style={{ marginTop: "0vw", marginBottom: "2vw" }}
          >
            {herosection.title}
          </h1>
          <p className="desc">{herosection.description}</p>
          <div className="buttonWrapHome">
            <a href="index.html#getstarted">
              <button className="reverse">{herosection.firstBtnText}</button>
            </a>
            <a href="https://peercoin.github.io/PeercoinUniversity/#/9-peercoin-proof-of-stake-consensus">
              <button>{herosection.secondBtnText}</button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
