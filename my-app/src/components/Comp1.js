import React, { useRef, useState } from "react";
import Comp2 from "./Comp2";
import Contextapi from "../contextapi";
export default function Comp1() {
  let x1 = useRef();
  let [country, setcount] = useState("");

  function myfunction() {
    console.log(x1.current.value);
    setcount(x1.current.value);
  }
  return (
    <div className="container">
      <h1>Props Drilling</h1>
      <input type="text" ref={x1} placeholder="Enter Country Name" />
      <button onClick={myfunction}>Search</button>
      <hr />
      <Contextapi.Provider value={country}>
        <Comp2 p1={country} />
      </Contextapi.Provider>
    </div>
  );
}
