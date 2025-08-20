import React from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <div className="flex flex-wrap mx-[40px]">
      <SingleProduct img="lotion.jpg" rating={3.9} />
      <SingleProduct img="lotion1.jpg" rating={4.3} />
      <SingleProduct img="serum.jpg" rating={2.2} />
      <SingleProduct img="serum1.jpg" rating={5} />
    </div>
  );
};

export default Products;
