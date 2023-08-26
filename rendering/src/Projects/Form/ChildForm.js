import React, { useReducer } from "react";
import "./Formstyle.css";
let intialstage = {
  name: "",
  number: "",
  password: "",
};
let reducer = (state, action) => {
  switch (action.type) {
    case "namehandler":
      return { ...state, name: action.value };
    case "numberhandler":
      return { ...state, number: action.value };
    case "passwordhandler":
      return { ...state, password: action.value };
    default:
      return state;
  }
};
const ChildForm = ({
  inputref,
  numberref,
  passwordref,
  confirmpasswordref,
}) => {
  const [values, dispatch] = useReducer(reducer, intialstage);
  const handlechange = (event, type) => {
    dispatch({ type: type, value: event.target.value });
  };
  const Submithandler = () => {
    const submissionInfo = JSON.stringify(values);
    alert(submissionInfo);
  };

  return (
    <div className="maincontainer">
      <form onSubmit={Submithandler}>
        <div className="container">
          <section>
            <label htmlFor="name">name</label>
            <br />
            <input
              type="text"
              id="name"
              value={values.name}
              ref={inputref}
              onChange={(event) => handlechange(event, "namehandler")}
            />
          </section>

          <section>
            <label htmlFor="tel">number</label>
            <br />
            <input
              type="tel"
              id="tel"
              ref={numberref}
              pattern="[0-9]{10}"
              inputMode="numeric"
              value={values.number}
              onChange={(event) => handlechange(event, "numberhandler")}
            />
          </section>
          <section>
            <label htmlFor="password">password</label>
            <br />
            <input
              type="password"
              id="password"
              value={values.password}
              ref={passwordref}
              onChange={(event) => handlechange(event, "passwordhandler")}
            />
          </section>

          <section>
            <label htmlFor="confirmpassword">Comform password</label>
            <br />
            <input
              type="password"
              id="confirmpassword"
              ref={confirmpasswordref}
            />
          </section>
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ChildForm;
