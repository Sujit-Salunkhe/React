import React, { useState } from "react";
import useInput from "./useInput";

function UserInput() {
  const [firstName,firstNamebind,resetfirstname] = useInput(" ")
  const [lastName, lastnamebind,resetlastname] = useInput(" ")
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Your name is ${firstName} ${lastName}`);
    resetfirstname()
    resetlastname()
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label for="firstname">firstName</label>
          <input
            type="text"
            {...firstNamebind}
            id="firstname"
          />
        </div>
        <div>
          <label for="lastname">lastName</label>
          <input
            type="text"
            {...lastnamebind}
            id="lastname"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UserInput;
