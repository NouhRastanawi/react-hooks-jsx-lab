import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div>
      <div>About me</div>
      <p>Lorem is da way</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
