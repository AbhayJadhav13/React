import React from "react";
import Product from "./Product";

export default function Home() {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <Product
            path="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/k/s/c/xxl-kcsh-fbrr-110-mao-fubar-original-imah4zemezxdqyzu.jpeg?q=70"
            name="Shirt"
            price="900"
          />
        </div>
        <div class="col">
          <Product
            path="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/c/m/q/28-mv-bl-3-markview-original-imahdeqsm3payngn.jpeg?q=70"
            name="Jeans"
            price="800"
          />
        </div>
        <div class="col">
          <Product
            path="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/h/i/z/xxl-king-of-curses-sukuna-purple-glitsy-original-imagtmrm7gggknzx.jpeg?q=70"
            name="T-Shirt"
            price="700"
          />
        </div>
      </div>
    </div>
  );
}
