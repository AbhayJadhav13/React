import React, { useContext } from "react";
import Contextapi from "../contextapi";

export default function Comp4(props) {
  let ans = useContext(Contextapi);
  return (
    <div>
      {props.p2}
      <hr />
      data from context API is {ans}
      <hr />
      <Contextapi.Consumer>
        {(value) => <div> Data from context consumer is {value}</div>}
      </Contextapi.Consumer>
    </div>
  );
}
