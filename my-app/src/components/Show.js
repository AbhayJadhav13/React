import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Show() {
  let [record, setrecord] = useState([]);
  useEffect(() => {
    console.log("Call API...");
    let ans = axios.get("http://localhost:3001/users");
    console.log(ans);
    ans
      .then((responce) => {
        console.log(responce);
        console.log(responce.data);
        setrecord(responce.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div class="container">
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
          {record.map((value) => (
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
