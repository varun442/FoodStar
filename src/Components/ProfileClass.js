import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("child - constructor " + this.props.name);
  }

  async componentDidMount() {
    //called after first render
    console.log("child - componentDidMount " + this.props.name);
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  
  componentDidUpdate(){
    //called after every next render
    console.log("Component Did Update");
  }

  componentWillUnmount(){
    console.log("Component Will Unmount");
  }
  render() {
    console.log("child - render " + this.props.name);
    return (
      <div>
        <h1> Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2> {this.state.userInfo.name}</h2>
        <h2> {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
