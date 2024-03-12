import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Pagination = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(90);
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
  const nextPage = () => {
    setPage(page + 10);
  };
  const prevPage = () => {};
  const handlePages = (e, i) => {
    e.preventDefault();
    let pageSpan  = document.getElementsByClassName('pagination_numbers')
    pageSpan.style.backgroundColor = 'grey'
    setPage(i * 10);
  };
  return (
    <div>
      <p className="title_head">product images</p>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="main__container">
            {products.slice(page, page + 10).map((product) => (
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
              <span
                className={page === 0 ? "hidden" : ""}
                onClick={() => prevPage()}
              >
                Prev...
              </span>
              <span>
                {[...Array(products.length / 10)].map((_, i) => (
                  <span
                    key={i + 1}
                    className="pagination_numbers"
                    onClick={(e) => handlePages(e, i)}
                  >
                    {i + 1}
                  </span>
                ))}
              </span>
              <span
                className={page === 90 || page === 100 ? "hidden" : ""}
                onClick={() => nextPage()}
              >
                Next...
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
