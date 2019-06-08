import React from "react";
// import Particles from 'react-particles-js';

import governance from "../../../../assets/images/animations/user-driven-governance.svg";

class UserGovernance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: this.props.language
    };
  }

  render() {
    const userGovernance = this.state.language.section3.userGovernance;
    return (
      <div data-wow-delay=".2s" className="row wow fadeIn">
        <div className="col-md-6 content-wrapper align-self-center">
          <h1 className="titlethick">{userGovernance.title}</h1>
          <p className="desc">
            {userGovernance.description.section1}
            <br />
            <br />
            {userGovernance.description.section2}
            <br />
            <br />
            {userGovernance.description.section3}
            <br />
          </p>
        </div>
        <div className="col-md-6 image-wrapper align-self-center">
          <img src={governance} />
        </div>
      </div>
    );
  }
}

export default UserGovernance;
