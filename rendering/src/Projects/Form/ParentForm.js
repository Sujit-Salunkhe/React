import React, { useEffect, useRef } from "react";
import ChildForm from "./ChildForm";
import UseKeydown from "./UseKeydown";

const ParentForm = () => {
  const inputref = useRef(null);
  const numberref = useRef(null);
  const passwordref = useRef(null);
  const confirmpasswordref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
    inputref.current.addEventListener("keydown", handleChnage);
    numberref.current.addEventListener("keydown", handlechangeTwo);
    passwordref.current.addEventListener("keydown", handlechangeThree);
    confirmpasswordref.current.addEventListener("keydown", handlechangeFour);

    return () => {
      inputref.current.removeEventListener("keydown", handleChnage);
      numberref.current.removeEventListener("keydown", handlechangeTwo);
      passwordref.current.removeEventListener("keydown", handlechangeThree);
      // confirmpasswordref.current.removeEventListener("keydown",handlechangeFour);
    };
  }, []);
  const handleChnage = (event) => {
    UseKeydown(event,  numberref);
  };
  const handlechangeTwo = (event) => {
    UseKeydown(event,  passwordref);
  };
  const handlechangeThree = (event) => {  
    UseKeydown(event, confirmpasswordref);
  };
  const handlechangeFour = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
  };
 return (

      <ChildForm
        inputref={inputref}
        numberref={numberref}
        passwordref={passwordref}
        confirmpasswordref={confirmpasswordref}
        />
    
  );
};

export default ParentForm;
