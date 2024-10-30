import React from "react";

function About(props) {
  const bio = props.bio;
  if (bio) {
    return(

    <div id="about">
      <h2>About Me</h2>
      <p>I made this!</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h2>Links</h2>
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>);
  } else  {
    return (
      <div id="about">
        <h2>About Me</h2>
        <p> </p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      </div>
    );
  }
}


export default About;
