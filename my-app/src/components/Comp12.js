import React from "react";
import { transferdata } from "./redux/slices/datatransferslice";
import { useDispatch } from "react-redux";
export default function Comp12(props) {
  let Dispatch = useDispatch();
  function myFunction() {
    Dispatch(transferdata("watch"));
  }
  return (
    <div>
      {props.p2}
      <button onClick={myFunction}>Submit</button>
    </div>
  );
}
