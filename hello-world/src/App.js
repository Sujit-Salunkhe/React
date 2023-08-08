import { Component } from 'react';
import './appStyles.css'
import RefsDemo from './Components/RefsDemo';
import Focusinput from './Components/Focusinput';
import FrparentInput from './Components/FrparentInput';
import PortalsDemo from './Components/PortalsDemo';
import Hero from './Components/Hero';
import Errorboundry from './Components/Errorboundry';
import HigherOC_1 from './Components/HigherOC_1';
import HigherOChove1 from './Components/HigherOChove1';
function App() {
  return (
    <div className="App">
    {/* <RefsDemo /> */}
    {/* <Focusinput /> */}
    {/* <FrparentInput /> */}
    {/* <PortalsDemo /> */}
    {/* <Errorboundry>
      <Hero Heroname="batman"/>
    </Errorboundry>
    <Errorboundry>
      <Hero Heroname="superman"/>
    </Errorboundry>
    <Errorboundry>
      <Hero Heroname="joker"/>
    </Errorboundry> */}
    <HigherOC_1 name="Sujit "/>
    <HigherOChove1/>
    </div>
  );
}

export default App;
