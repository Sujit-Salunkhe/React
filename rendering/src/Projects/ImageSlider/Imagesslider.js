import React, { useState } from "react";
import "./images.css";

const Imagesslider = () => {
  const [currnet, setCurrent] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
    "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  ];
  const previousslide = () => {
    setCurrent(currnet === 0 ? images.length - 1 : currnet - 1);
  };
  const nextslide = () => {
    setCurrent(currnet === images.length - 1 ? 0 : currnet + 1);
  };
  return (
    <React.Fragment>
      <h1>Nature Images</h1>
      <div className="Container">
        <div className="main">
          <div className="left-arrow" onClick={previousslide}>
            &larr;
          </div>

          {images.map(
            (value, index) =>
              currnet === index && (
                <div key={value} className="slide">
                  <img src={value} alt="image" className="natures"></img>
                </div>
              )
          )}
          <div className="right-arrow" onClick={nextslide}>
            &rarr;
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Imagesslider;
