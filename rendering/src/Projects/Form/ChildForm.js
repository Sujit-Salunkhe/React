import React from "react";
import "./Formstyle.css";
const ChildForm = ({
  inputref,
  numberref,
  passwordref,
  confirmpasswordref,
  Submithandler,
}) => {
  return (
    <div className="maincontainer">
      <form onSubmit={Submithandler}>
        <div className="container">
          <section>
            <label htmlFor="name">name</label><br/>
            <input type="text" id="name" ref={inputref} />
          </section>

          <section>
            <label htmlFor="tel">number</label><br/>
            <input type="tel" id="tel" ref={numberref} pattern="[0-9]{10}" inputmode="numeric"/>
          </section>
          <section>
            <label htmlFor="password">password</label><br/>
            <input type="password" id="password" ref={passwordref} />
          </section>

          <section>
            <label htmlFor="confirmpassword">Comform password</label><br/>
            <input type="password" id="confirmpassword" ref={confirmpasswordref} />
          </section>
            <br/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ChildForm;
