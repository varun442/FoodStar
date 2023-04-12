import food from "../Images/burger-image.png";
// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }
  componentDidMount() {
    console.log("parent - componentDidMount");
  }
  render() {
    console.log("parent - Render");

    return (
      <div className="about-container">
        <div className="about-left">
          <h1>
            Welcome to <br /> The world of <br />{" "}
            <span>Tasty & Fresh Food</span>
          </h1>
          <h4>
            "Better you will feel if you eat a Food<span>Fire</span> healthy
            meal"
          </h4>
        </div>
        <div className="about-right">
          <img src={food} alt="Food Image" />
        </div>
        <Profile name={"first "}/>
      </div>
    );
  }
}
export default About;
