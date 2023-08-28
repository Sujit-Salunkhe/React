import React, { useState, useEffect } from "react";

const Sujit = () => {
  let currenttime = new Date();
  let currethours = currenttime.getHours();
  console.log(currethours);
  const [Greeting, setGreeting] = useState("Good Night");
  const [grettingStyle,setStyle]=useState({color:"black"})
  useEffect(() => {
    if (currethours >= 6 && currethours < 12) {
      setGreeting("Good Morning");
      console.log("good morning")
      setStyle({color:"green"})
      console.log(grettingStyle)
      // console.log("greeting");
    } else if (currethours >= 12 && currethours < 18) {
      // grettingStyle.color="pink"

      setGreeting("Good Afternoon")
      setStyle({color:"pink"});
      console.log("good afternoon")
      console.log(grettingStyle)
    }
  }, [currethours]);


  return (
    <div>
      <h1>Hello sir ,<span style={grettingStyle}>{Greeting}</span></h1>
    </div>
  );
};

export default Sujit;
