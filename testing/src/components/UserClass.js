import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 2, //second count variable
    };
  }

  componentDidMount() {}

  render() {
    const { name, location, image_url } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <img
          src={image_url}
          style={{ width: "150px", height: "150px", objectFit: "contain" }}
        />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : shitole</h4>
      </div>
    );
  }
}

export default UserClass;
