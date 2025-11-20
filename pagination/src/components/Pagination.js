import axios from "axios";
import { useState, useEffect, Suspense, useRef } from "react";

const Pagination = () => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [backClass, setBackClass] = useState("");
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
  const nextPage = (e) => {
    let incPage = page + 10
    let str = String(incPage);
    setPage(incPage);
    handlePages(e,str[0])
  };
  const prevPage = (e) => {
    let incPage = page - 10
    let str = String(incPage);
    handlePages(e,str[0])
    setPage(incPage);
  };
  const handlePages = (e, i) => {
    e.preventDefault();
    let firstNumber = document.getElementById("FirstNumber");
    if (firstNumber?.id) {  
      firstNumber.id = "";
    };
  
    let pageSpan = document.getElementsByClassName("pagination_numbers")[i];
    
    setBackClass(pageSpan);
    if (backClass) {
      backClass.style.backgroundColor = "";
    }
    pageSpan.style.backgroundColor = "grey";
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
                onClick={(e) => prevPage(e)}
              >
                Prev...
              </span>
              <span>
                {[...Array(products.length / 10)].map((_, i) => (
                  <span
                    key={i + 1}
                    className="pagination_numbers"
                    onClick={(e) => handlePages(e, i)}
                    id={i === 0 ? "FirstNumber" : ""}
                  >
                    {i + 1}
                  </span>
                ))}
              </span>
              <span
                className={page === 90 || page === 100 ? "hidden" : ""}
                onClick={(e) => nextPage(e)}
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
