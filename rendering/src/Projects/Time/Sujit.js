import React, { useState, useEffect } from "react";

const Sujit = () => {
  let currenttime = new Date(2020, 2, 2, 7);
  let currethours = currenttime.getHours();
  console.log(currethours);
  const [Greeting, setGreeting] = useState("Good Night");
  useEffect(() => {
    if (currethours >= 6 && currethours < 12) {
      setGreeting("Good Morning");
      console.log("greeting");
    } else if (currethours >= 12 && currethours < 18) {
      setGreeting("Good Afternoon");
    }
  }, [currethours]);

  return (
    <div>
      <h1>Hello sir ,{Greeting}</h1>
    </div>
  );
};

export default Sujit;
