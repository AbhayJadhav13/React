import React, { useState } from "react";

export default function Contact(props) {
  let [count, setcount] = useState(0);
  function myFunction() {
    // props.x1 = 1000;
    // props.x2 = 2000;
    setcount(count + 1);
  }
  return (
    <div>
      <p>{props.x1}</p>
      <p>{props.x2}</p>
      <p>{count}</p>
      <button onClick={myFunction}>abx</button>
    </div>
  );
}
