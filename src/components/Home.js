import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
  // update the JSX being returned!
 
}

export default Home;
