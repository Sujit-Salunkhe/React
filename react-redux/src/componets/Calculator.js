import React from "react";
import { GiHamburgerMenu } from "react-icons";

function Calculator() {
  return (
    <>
      <section>
        <div className="bg-gray-900 w-96 h-screen mx-auto rounded-lg overflow-hidden mt-10"></div>
        <div className="text-gray-200 w-full font-bold text-3xl h-16 flex items-centre space-x-2 pl-2">
          <GiHamburgerMenu />
          <p>Calculator app</p>
        </div>
        {/* screen */}
        <div className="w-full h-20 ">
          <input
            type="text"
            placeholder="0"
            className="w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5 "
          />
        </div>
        {/* keypad */}
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button></button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button></button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button></button>
        </div>
        <div>
          <button>0</button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        
      </section>
    </>
  );
}

export default Calculator;
