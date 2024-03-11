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
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div>
        <p className="title_head">product images</p>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="main__container">
            {products.slice(0, 10).map((product) => (
              <span key={product.id} className="products__container">
                <img
                  src={product.thumbnail}
                  alt="productImg"
                  className="images"
                />
                <span>{product.title}</span>
              </span>
            ))}
          </div>
          {products.length > 0 && (
            <div className="pagination_container">
              <span> Prev...</span>
              <span>
                {[...Array(products.length / 10)].map((_, i) => (
                  <span key={i + 1} className="pagination_numbers">{i + 1}</span>
                ))}
              </span>
              <span>Next...</span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
