import React from "react";
import { useSelector } from "react-redux";

export default function Comp11(props) {
  const brandName = useSelector((state) => state.datatransfer.brand);
  function myFunction(event) {
    console.log(event.target.innerText);
    props.p1(event.target.innerText);
  }
  return (
    <div>
      {brandName}
      <ul>
        <li onClick={myFunction}>Zara</li>
        <li onClick={myFunction}>Nobero</li>
        <li onClick={myFunction}>Puma</li>
      </ul>
    </div>
  );
}
