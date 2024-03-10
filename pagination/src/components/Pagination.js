import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Pagination = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setProducts(res.data.products)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading
        ? "loading..."
        : products.map((product) => (
            <div key={product.id}>{product.title}</div>
          ))}{" "}
    </div>
  );
};

export default Pagination;
