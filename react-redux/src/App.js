import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './componets/CakeContainer';
import HooksCakeContainer from './componets/HooksCakeContainer';
import IceCremeContainer from './componets/IceCremeContainer';
import NewCakeContainer from './componets/NewCakeContainer';
import ItemContainer from './componets/ItemContainer';
import UserContainer from './componets/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/* <ItemContainer cake/>
    <ItemContainer/>
    <CakeContainer/>
    <NewCakeContainer/>
    <HooksCakeContainer/>
    <IceCremeContainer/> */}
    <UserContainer />
    </div>
    </Provider>
  );
}

export default App;
