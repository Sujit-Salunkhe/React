import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './componets/CakeContainer';
import HooksCakeContainer from './componets/HooksCakeContainer';
import IceCremeContainer from './componets/IceCremeContainer';
import NewCakeContainer from './componets/NewCakeContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContainer/>
    <NewCakeContainer/>
    <HooksCakeContainer/>
    <IceCremeContainer/>
    </div>
    </Provider>
  );
}

export default App;
