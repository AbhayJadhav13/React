import axios from "axios";
import React, { Component } from "react";

class Showuser extends React.Component {
  constructor() {
    super();
    console.log(this);
    // let [count,setcount] = useState(0); for functional component
    this.state = {
      apidata: [],
    }; // for class componenet
  }
  // componenet did mount

  componentDidMount() {
    let ans = axios.get("http://localhost:3001/user");
    console.log(ans);
    ans.then((response) => {
      console.log(response.data);
      this.setState({ apidata: response.data });
    });
    //console.log("componenetDidMount called");
  }

  // componenet will unmount

  componentWillUnmount() {
    console.log("Willmount Count");
  }
  render() {
    console.log(this);
    const data = this.state.apidata;
    return (
      <div className="container">
        <h1>Show User Component</h1>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value) => (
              <tr>
                <td>{value._id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
              </tr>
            ))}
            ;
          </tbody>
        </table>
      </div>
    );
  }
}
export default Showuser;
