import React from "react";

export default function Product(props) {
  console.log(props);
  return (
    <div>
      <img src={props.path} alt="Image Not Found" class="img-fluid" />
      <h2>{props.price}</h2>
      <p>{props.name}</p>
      <button>Add To Cart</button>
    </div>
  );
}
