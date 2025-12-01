import axios from "axios";
import React from "react";
class Adduser extends React.Component {
  construct() {
    this.x1 = React.createRef();
    this.x2 = React.createRef();
    this.x3 = React.createRef();
  }
  myFunction() {
    console.log(this.x1.current.value);
    console.log(this.x2.current.value);
    console.log(this.x3.current.value);
    let data = {
      name: this.x1.current.value,
      email: this.x2.current.value,
      password: this.x3.current.value,
    };
    axios
      .post("http://localhost:3001/add-user", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    {
    }
  }
  render() {
    return (
      <div className="container">
        <h1>Add User Component</h1>
        <input type="text" ref={this.x1} />
        <input type="text" ref={this.x2} />
        <input type="text" ref={this.x3} />
        <button
          onClick={() => {
            this.myFunction();
          }}
        >
          Login
        </button>
      </div>
    );
  }
}
export default Adduser;
