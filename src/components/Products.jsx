import axios from "axios";
import { useState, useEffect } from "react";
import "./Products.css";
import {Link} from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data);
        setProducts([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let items = products.map((item) => {
    return (
      <Link key={item.id} className="prod-card" to={`details/${item.id}`}>
        <img src={item.image} alt={item.title} className="prod-img" />
        <h3 className="prod-title">{item.title}</h3>
      </Link>
    );
  });

  return (
    <>
      <h1>Products</h1>
      <div className="prod-container">{items}</div>
    </>
  );
};

export default Products;
