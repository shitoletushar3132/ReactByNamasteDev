import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shitoletushar3132");
    const json = await data.json();

    this.setState({ userInfo: json });

    console.log(json);
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>About</h1>
        <a href="https://github.com/shitoletushar" target="_blank">
          GITHUB
        </a>
        <UserClass name={name} location={location} image_url={avatar_url} />
      </div>
    );
  }
}

export default About;
