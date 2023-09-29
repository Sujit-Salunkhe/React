import React from "react";
import {useDispatch ,useSelector } from 'react-redux'
import { Load_Ans, Load_Backpace, Load_Button, Load_Clear } from "../redux/calculator/calculatorActions";
import { CALCULATOR_KEY } from "../redux/calculator/calculatorReducer";
import './calculator.css';

function Calculator() {
  const dispatch = useDispatch()
  // view calculator
  const viewCalculator = useSelector((state)=>{
    return state[CALCULATOR_KEY]
  })
  return (
    <>
      <section className="container">
        {/* screen */}
        <div className="top">
          {(viewCalculator.ans).length === 0 ? <h3> {viewCalculator.number} </h3> : <h3>{viewCalculator.ans}</h3>} 
        </div>
        
        {/* keypad */}
        <div className="bottom">
          <button className="btn" onClick={() =>dispatch(Load_Clear())}>AC</button>
          <button className="btn" onClick={() => dispatch(Load_Backpace())}>C</button>
          <button className="btn" onClick={() => dispatch(Load_Button("/"))}>/</button>
          <button className="btn largebtn" onClick={() => dispatch(Load_Button("+"))} >+</button>
        
          <button className="btn" onClick={() =>dispatch(Load_Button(9))}>9</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(8))}>8</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(7))}>7</button>
        
          <button className="btn" onClick={() =>dispatch(Load_Button(4))}>4</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(5))}>5</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(6))}>6</button>
          <button className="btn" onClick={() => dispatch(Load_Button("-"))}>-</button>
        
          <button className="btn" onClick={() =>dispatch(Load_Button(1))}>1</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(2))}>2</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(3))}>3</button>
          <button className="btn" onClick={() =>dispatch(Load_Button("*"))}>*</button>
        
          <button className="btn largepointer" onClick={() =>dispatch(Load_Button("."))} >.</button>
          <button className="btn" onClick={() =>dispatch(Load_Button(0))}>0</button>
          <button className="btn" onClick={() => dispatch(Load_Ans())}>=</button>
      
        </div>
        
      </section>
    </>
  );
}

export default Calculator;
