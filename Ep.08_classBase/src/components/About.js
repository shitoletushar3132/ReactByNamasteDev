import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <a href="https://github.com/shitoletushar" target="_blank">
          GITHUB
        </a>
        <UserClass name={"tushr shitole class"} location={"hadpsar"} />
      </div>
    );
  }
}

export default About;
