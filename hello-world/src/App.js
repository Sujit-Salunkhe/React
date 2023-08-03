import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello.js';
import Counter  from './Components/Counter';
import Functionclick from './Components/Functionclick';
import Classclick  from './Components/Classclick';
import Eventbind from './Components/Eventbind';
import Parentcomponet from './Components/parentcomponet';
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Greet  name ="sujit" superhero="Thor">
        <p>I am god of Thunder</p>
         </Greet>
      <Greet  name ="amar" superhero="vision"/>
      <Greet  name ="Vaishnav" superhero="ant_man"/>
    <Hello/>
    <Welcome />  */}
    <Parentcomponet />
    {/* <Eventbind /> */}
    {/* <Functionclick /> */}
    {/* <Classclick /> */}

    </div>
  );
}

export default App;
