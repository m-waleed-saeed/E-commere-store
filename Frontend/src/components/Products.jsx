import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import userRequest from "../requestMethods";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ filters, sort, query }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const getProducts = async () => {
      try {
        let res;
        if (query) {
          res = await userRequest.get(`/products?search=${query}`);
        } else {
          res = await userRequest.get(`/products`);
        }
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [query]);

  // Filter + Sort
  useEffect(() => {
    let tempProducts = [...products];

    // Apply filters
    if (filters) {
      tempProducts = tempProducts.filter((item) =>
        Object.entries(filters).every(([key, value]) => {
          if (!value) return true; // skip empty filters

          const field = item[key];

          if (typeof field === "string") {
            return field.toLowerCase().includes(value.toLowerCase());
          }

          if (Array.isArray(field)) {
            return field.some(
              (val) => val.toLowerCase() === value.toLowerCase()
            );
          }

          return false; // if field missing or not a string/array
        })
      );
    }

    // Apply sorting
    if (sort === "newest") {
      tempProducts.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    } else if (sort === "asc") {
      tempProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sort === "desc") {
      tempProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }

    setFilteredProducts(tempProducts);
  }, [products, filters, sort]);

  return (
    <div className="flex flex-wrap mx-[30px]">
      {filteredProducts.map((product) => (
        <Link key={product._id} to={`product/${product._id}`}>
          <SingleProduct
            img={product.image}
            title={product.title}
            rating={product.rating}
          />
        </Link>
      ))}
    </div>
  );
};

Products.propTypes = {
  cat: propTypes.string,
  filters: propTypes.object,
  sort: propTypes.string,
  query: propTypes.string,
};

export default Products;
