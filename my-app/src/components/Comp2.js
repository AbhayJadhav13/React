import React from "react";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";

export default function Comp2(props) {
  return (
    <div class="border border-5 p-5">
      {props.p1}
      <div className="row">
        <div className="col-xl-3 border border-3 p-3">
          <Comp3 />
        </div>
        <div className="col-xl-9 border border-3 p-3">
          <Comp4 p2={props.p1} />
        </div>
      </div>
    </div>
  );
}
