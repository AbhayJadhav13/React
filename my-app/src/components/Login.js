import axios from "axios";
import React, { use, useRef } from "react";

// npm i axios;
export default function Login() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();

  function myFunction() {
    console.log(x1);
    console.log(x2);
    console.log(x3);
    console.log(x1.current.value);
    console.log(x2.current.value);
    console.log(x3.current.value);
    let data = {
      name: x1.current.value,
      email: x2.current.value,
      password: x3.current.value,
    };
    let ans = axios.post("http://localhost:3001/add-user", data);
    console.log(ans);
    ans
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <input ref={x1} type="text" placeholder="Enter-Name" />
      <br />
      <input ref={x2} type="Email" placeholder="Email-ID" />
      <br />
      <input ref={x3} type="text" placeholder="Password" />
      <br />
      <button onClick={myFunction}>Submit</button>
      <br />
    </div>
  );
}
