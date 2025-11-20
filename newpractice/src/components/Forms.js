import { useEffect, useRef, useState } from "react";

const Forms = () => {
  const [detail, setDetail] = useState({
    fname: "",
    lname: "",
    phone: "",
    addharNumber: "",
  });
  const nameRef = useRef();
  const lnameRef = useRef();
  const phoneRef = useRef();
  const addharNumberRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (name === "fname" || name === "lname") {
      if (value.trim()?.length < "3") {
        setDetail((prev) => ({ ...prev, [name]: value }));
        console.log("The name must be 3 chracters long");
      } else {
        setDetail((prev) => ({ ...prev, [name]: value }));
      }
    } else if (name === "phone") {
      if (value.trim().length < 10) {
        console.log("Number Must be 10 Digits");
        setDetail((prev) => ({ ...prev, [name]: value }));
      } else {
        setDetail((prev) => ({ ...prev, [name]: value }));
      }
    }else{
        hanedleAddharNumber(e)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(detail);
  };
  const hanedleAddharNumber = (e) => {
    let { name, value } = e.target;
    let size = value.replace(/-/g,"").length;
    if (
      size % 4 === 0 &&
      size < 12 &&
      e.nativeEvent.inputType === "insertText"
    ) {
      value += "-";
    }
    if (size <= 12) {
      setDetail((prev) => ({ ...prev,  [name]: value }));
    }
  };
  const handleClick = (e, ref) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  return (
    <div className="Mainbody">
      <form onSubmit={handleSubmit} className="main"    >
        <p> Fill Personal Information</p>
        <div className="inputelement">
          <label>
            {" "}
            name <br />
            <input
              type="text"
              onKeyDown={(e) => handleClick(e, lnameRef)}
              onChange={(e) => handleChange(e)}
              name="fname"
              value={detail.fname}
              ref={nameRef}
            />
          </label>
        </div>
        <br />
        <div className="inputelement">
          <label>
            {" "}
            Surname <br />
            <input
              type="text"
              onKeyDown={(e) => handleClick(e, phoneRef)}
              onChange={(e) => handleChange(e)}
              name="lname"
              value={detail.lname}
              ref={lnameRef}
            />
          </label>
        </div>
        <br />
        <div className="inputelement">
          <label>
            {" "}
            Phone number <br />
            <input
              type="text"
              onKeyDown={(e) => handleClick(e, addharNumberRef)}
              onChange={(e) => handleChange(e)}
              name="phone"
              value={detail.phone}
              ref={phoneRef}
            />
          </label>
        </div>
        <br />
        <div className="inputelement">
          <label>
            {" "}
            Addhar card number <br />
            <input
              type="text"
              onKeyDown={(e) => handleClick(e, nameRef)}
              onChange={handleChange}
              name="addharNumber"
              value={detail.addharNumber}
              ref={addharNumberRef}
            />
          </label>
        </div>
        <br />
        <div className="inputelement">
          <br />
          <button onClick={handleSubmit} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
