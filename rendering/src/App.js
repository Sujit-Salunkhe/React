// import logo from './logo.svg';
import './App.css';
import ChildCompont from './Componets/EightyThree.js/ChildCompont';
// import UserState from './Componets/SeventyNine/UserState';
// import UseStateImmutablitu from './Componets/EightyOne/UseStateImmutablitu';
// import Arrayex from './Componets/EightyOne/Arrayex';
import Parentcompont from './Componets/EightyThree.js/Parentcompont';

function App() {
  return (
    <div className="App">
      {/* <UserState/> */}
      {/* <Arrayex/> */}
      <Parentcompont>
        <ChildCompont/>
      </Parentcompont>
      {/* <UseStateImmutablitu/> */}
    </div>
  );
}

export default App;
