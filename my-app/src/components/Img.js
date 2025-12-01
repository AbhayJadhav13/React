import React from "react";

export default function Img(props) {
  if (props.path == null) {
    throw new Error("Image not found");
  }
  return (
    <img
      src={"https://image.tmdb.org/t/p/w500" + props.path}
      alt=""
      className="img-fluid"
    />
  );
}
