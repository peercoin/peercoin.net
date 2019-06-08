import React from "react";
// import Particles from 'react-particles-js';
import EfficientSecurity from "./efficientSecurity";
import UserGovernance from "./userGovernance";
import TrustlessBaseLayer from "./trustlessBaseLayer";
import FairDistribution from "./fairDistribution";
import ReliableValueSection from "./reliableValueSection";

class Section3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    };
  }

  render() {
    const section3 = this.state.language;
    return (
      <section id="three" class="feature-home">
        <div class="container">
          <EfficientSecurity language={section3} />
          <UserGovernance language={section3} />
          <TrustlessBaseLayer language={section3} />
          <FairDistribution language={section3} />
          <ReliableValueSection language={section3} />
        </div>
      </section>
    );
  }
}

export default Section3;
