import { Component } from "react";
import "./appStyles.css";
import RefsDemo from "./Components/RefsDemo";
import Focusinput from "./Components/Focusinput";
import FrparentInput from "./Components/FrparentInput";
import PortalsDemo from "./Components/PortalsDemo";
import Hero from "./Components/Hero";
import Errorboundry from "./Components/Errorboundry";
import HigherOC_1 from "./Components/HigherOC_1";
import HigherOChove1 from "./Components/HigherOChove1";
import Render_1 from "./Components/Render_1";
import Render_1hover from "./Components/Render_1hover";
import Render_2 from "./Components/Render_2";
import Render_2main from "./Components/Render_2main";
import { UserProvider } from "./Components/Usercontext";
import ComponetC from "./ComponetC";
function App() {
  return (
    <div className="App">
       <Render_2main>
       {(count, incrementcount) => (
          <Render_1 count={count} incrementcount={incrementcount} />
         )}
       </Render_2main>
       <Render_2main>
     {(count, incrementcount) => (
         <Render_1hover count={count} incrementcount={incrementcount} />
       )}
       </Render_2main>  
      <UserProvider value="sujit">
        <ComponetC />
      </UserProvider>
    </div>
  );
}

export default App;

