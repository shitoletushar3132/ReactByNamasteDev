import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 2, //second count variable
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count inc
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : shitole</h4>
      </div>
    );
  }
}

export default UserClass;
