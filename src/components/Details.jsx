import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Details = () => {
  let { id } = useParams();

  const [item, setItem] = useState({});
 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        // console.log(res.data)
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  return (
    <>
      <h1>{item.title}</h1>
      <div>
        <img src={item.image} alt={item.title} className="prod-img"/>
        <p>${item.price}</p>
        {/* <p>User Rating {rate}</p> */}
        <p>{item.description}</p>
      </div>
        <Link to={'/'}>Back</Link>
    </>
  );
};

export default Details;
