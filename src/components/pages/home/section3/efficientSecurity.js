import React from "react";
// import Particles from 'react-particles-js';

import security from "../../../../assets/images/animations/efficient-and-sustainable.svg";

class EfficientSecurity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    };
  }

  render() {
    const efficientSecurity = this.state.language.section3.efficientSecurity;
    return (
      <div data-wow-delay=".2s" className="row wow fadeIn">
        <div className="col-md-6 content-wrapper align-self-center">
          <h1 className="titlethick">{efficientSecurity.title}</h1>
          <p className="desc">
            {efficientSecurity.description.section1} <br />
            <br />
            {efficientSecurity.description.section2}
            <br />
            <br />
            {efficientSecurity.description.section3}
            <br />
          </p>
        </div>

        <div className="col-md-6 image-wrapper align-self-center">
          <img src={security} alt="" />
        </div>
      </div>
    );
  }
}

export default EfficientSecurity;
