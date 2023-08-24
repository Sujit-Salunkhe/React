import React from "react";
import './Style.css'
const QuateChild = ({ read, another }) => {
  return (
    <main className="Maincontainer">
        <div>
        <section className="heading">Quotes</section>
        <section className="container">
        {read?.text}
        <div className="author">{read?.author}</div>
        <div>
          <button onClick={another}>For Quote</button>
        </div>
      </section>
      </div>
    </main>
  );
};

export default QuateChild;
