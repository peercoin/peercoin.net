import React from "react";
// import Particles from 'react-particles-js';

import GetStarted from "./getStarted";

class Section4 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="four" class="start-accordion">
        <div class="container">
          <GetStarted />
        </div>
      </section>
    );
  }
}

export default Section4;
