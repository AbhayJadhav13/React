import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
export default function Search() {
  let [record, setrecord] = useState([]);
  const result = useSelector((state) => state.search.moviename);
  useEffect(() => {
    let ans = axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${result}&page=1`
    );
    ans.then((response) => {
      console.log(response.data.results);
      setrecord(response.data.results);
    });
    console.log(ans);
  }, [result]);
  return (
    <div>
      <div className="row">
        {record.map((value) => (
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
