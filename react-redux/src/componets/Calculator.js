import React from "react";
import { GiHamburgerMenu } from "react-icons";
import {useDispatch ,useSelector } from 'react-redux'
import { Load_Ans, Load_Backpace, Load_Button, Load_Clear } from "../redux/calculator/calculatorActions";
import { CALCULATOR_KEY } from "../redux/calculator/calculatorReducer";

function Calculator() {
  const dispatch = useDispatch()
  // view calculator
  const viewCalculator = useSelector((state)=>{
    return state[CALCULATOR_KEY]
  })
  return (
    <>
    <pre>{JSON.stringify(viewCalculator)}</pre>
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
            value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans} 
            className="w-full h-full border border-white bg-gray-900 text-4xl text-right pr-5 "
          />
        </div>
        {/* keypad */}
        <div>
          <button onClick={() =>dispatch(Load_Clear())}>ac</button>
          <button onClick={() => dispatch(Load_Backpace())}>c</button>
          <button onClick={() => dispatch(Load_Button("/"))}>/</button>
          <button className="rowspan-2">+</button>
        </div>
        <div>
          <button onClick={() =>dispatch(Load_Button(9))}>9</button>
          <button onClick={() =>dispatch(Load_Button(8))}>8</button>
          <button onClick={() =>dispatch(Load_Button(7))}>7</button>
        </div>
        <div>
          <button onClick={() =>dispatch(Load_Button(4))}>4</button>
          <button onClick={() =>dispatch(Load_Button(5))}>5</button>
          <button onClick={() =>dispatch(Load_Button(6))}>6</button>
          <button onClick={() => dispatch(Load_Button("-"))}>-</button>
        </div>
        <div>
          <button onClick={() =>dispatch(Load_Button(1))}>1</button>
          <button onClick={() =>dispatch(Load_Button(2))}>2</button>
          <button onClick={() =>dispatch(Load_Button(3))}>3</button>
          <button onClick={() =>dispatch(Load_Button("*"))}>*</button>
        </div>
        <div>
          <button onClick={() =>dispatch(Load_Button("."))} >.</button>
          <button onClick={() =>dispatch(Load_Button(0))}>0</button>
          <button onClick={() => dispatch(Load_Ans())}>=</button>
        </div>
        
      </section>
    </>
  );
}

export default Calculator;
