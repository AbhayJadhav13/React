import React, { useState } from "react";
import Comp11 from "./Comp11";
import Comp12 from "./Comp12";

export default function Comp10() {
  let [data, setdata] = useState("");
  function parentcompfunction(value) {
    console.log("Parent Component Called", value);
    setdata(value);
  }
  return (
    <div className="container">
      <h1>State Lift Example</h1>
      <div className="row">
        <div className="col-xl-3">
          <Comp11 p1={parentcompfunction} />
        </div>
        <div className="col-xl-9">
          <Comp12 p2={data} />
        </div>
      </div>
    </div>
  );
}
