import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Upcoming() {
  let [api, setapi] = useState([]);
  useEffect(() => {
    console.log("Call API Data");
    let ans = axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
    );
    ans.then((responce) => {
      console.log(responce.data.results);
      setapi(responce.data.results);
    });
    console.log(ans);
  }, []);
  return (
    <div className="container">
      <h1>Upcoming Movies</h1>
      <div className="row">
        {api.map((value) => (
          <div className="col-xl-3">
            <img
              src={"https://image.tmdb.org/t/p/w500" + value.poster_path}
              alt=""
              class="img-fluid"
            />
            <p>{value.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
