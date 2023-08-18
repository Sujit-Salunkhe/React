import React from "react";

function Button({ clickhandler, children }) {
  console.log("rendering button", { children });
  return <button onClick={clickhandler}>{children}</button>;
}

export default React.memo(Button);
