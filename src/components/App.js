import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New york" color="firebrick"  />
      <About
        
        bio="I made this"
        github="https://github.com/liza"
        linkedin="https://www.linkedin.com/in/liza/"
      />
    </div>
  );
}

export default App;
