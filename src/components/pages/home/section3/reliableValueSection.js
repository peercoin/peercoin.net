import React from "react";
// import Particles from 'react-particles-js';

import reliable from "../../../../assets/images/animations/reliable-store-of-value.svg";

class ReliableValueSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    };
  }

  render() {
    const reliableValueStore = this.state.language.section3.reliableValueStore;
    return (
      <div data-wow-delay=".2s" className="row wow fadeIn">
        <div className="col-md-6 content-wrapper align-self-center">
          <h1 className="titlethick">{reliableValueStore.title}</h1>
          <p className="desc">
            {reliableValueStore.description.section1}
            <br />
            <br />
            {reliableValueStore.description.section2}
            <br />
            <br />
            {reliableValueStore.description.section3}
            <br />
          </p>
        </div>
        <div className="col-md-6 image-wrapper align-self-center">
          <img src={reliable} alt="" />
        </div>
      </div>
    );
  }
}

export default ReliableValueSection;
