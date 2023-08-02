import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
import Hello from './components/Hello.js';
function App() {
  return (
    <div className="App">
      <Greet  name ="sujit" superhero="Thor">
        <p>I am god of Thunder</p>
         </Greet>
      <Greet  name ="amar" superhero="vision"/>
      <Greet  name ="Vaishnav" superhero="ant_man"/>
      <Welcome name ="Vaishnav" superhero="ant_man" /> 
      <Hello/>
    </div>
  );
}

export default App;
