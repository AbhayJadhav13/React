import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Img from "./Img";
import ErrorBoundary from "../Errorboundry";
export default function Singlemovie() {
  let answer = useParams();
  console.log(answer);
  let [info, setinfo] = useState({});
  let [cast, setcast] = useState([]);

  useEffect(() => {
    let ans = axios.get(
      `https://api.themoviedb.org/3/movie/${answer.movieid}?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    );
    ans.then((response) => {
      console.log(response.data);
      setinfo(response.data);
    });

    let anscast = axios.get(
      `https://api.themoviedb.org/3/movie/${answer.movieid}/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US`
    );
    anscast.then((response) => {
      console.log(response.data);
      setcast(response.data.cast);
    });
  }, []);
  return (
    <div className="container">
      <h1> Singlemovie Page</h1>
      <div className="row">
        <div className="col-xl-6">
          <img
            src={"https://image.tmdb.org/t/p/w500" + info.poster_path}
            alt=""
          />
        </div>
        <div className="col-xl-6">
          <h2>{info.original_title}</h2>
          <p>{info.overview}</p>
        </div>
      </div>
      <div className="row">
        {cast.map((value) => (
          <div className="col-xl-2">
            <ErrorBoundary>
              <Img path={value.profile_path} />
            </ErrorBoundary>
            <p>{value.original_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
