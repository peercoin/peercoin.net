import React from "react";
// import Particles from 'react-particles-js';

import distribution from "../../../../assets/images/animations/pos-security-and-distribution.svg";

class FairDistribution extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    };
  }

  render() {
    const fairDistribution = this.state.language.section3.fairDistribution;
    return (
      <div data-wow-delay=".2s" className="row wow fadeIn">
        <div className="col-md-6 content-wrapper align-self-center">
          <h1 className="titlethick">{fairDistribution.title}</h1>
          <p className="desc">
            {fairDistribution.description.section1}
            <br />
            <br />
            {fairDistribution.description.section2}
            <br />
            <br />
            {fairDistribution.description.section3}
            <br />
            <br />
            {fairDistribution.description.section4}
            <br />
          </p>
        </div>
        <div className="col-md-6 image-wrapper align-self-center">
          <img src={distribution} alt="" />
        </div>
      </div>
    );
  }
}

export default FairDistribution;
