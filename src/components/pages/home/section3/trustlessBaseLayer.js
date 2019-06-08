import React from "react";
// import Particles from 'react-particles-js';

import trustless from "../../../../assets/images/animations/trustless-base-layer.svg";

class TrustlessBaseLayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    };
  }

  render() {
    const trustlessBaseLayer = this.state.language.section3.trustlessBaseLayer;

    return (
      <div data-wow-delay=".2s" className="row wow fadeIn">
        <div className="col-md-6 content-wrapper align-self-center">
          <h1 className="titlethick">{trustlessBaseLayer.title}</h1>
          <p className="desc">
            {trustlessBaseLayer.description.section1} <br />
            <br />
            {trustlessBaseLayer.description.section2}
            <br />
            <br />
            {trustlessBaseLayer.description.section2}
            <br />
            <br />
            {trustlessBaseLayer.description.section4}
            <br />
          </p>
        </div>
        <div
          data-wow-delay="3s"
          className="wow col-md-6 image-wrapper align-self-center"
        >
          <img src={trustless} alt="" />
        </div>
      </div>
    );
  }
}

export default TrustlessBaseLayer;
