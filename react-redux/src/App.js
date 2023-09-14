import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './componets/CakeContainer';
import HooksCakeContainer from './componets/HooksCakeContainer';
import IceCremeContainer from './componets/IceCremeContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContainer/>
    <HooksCakeContainer/>
    <IceCremeContainer/>
    </div>
    </Provider>
  );
}

export default App;
