import { useState } from 'react';
import './App.css';
import Folder from './componets/Folder.js';
import explorer from './data/folderData.js';

function App() {
  const [explorerState, setExplorerState] = useState(explorer);
  return (
    <div className="App">
      <Folder explorerData = {explorer}/>
    </div>
  );
}

export default App;
