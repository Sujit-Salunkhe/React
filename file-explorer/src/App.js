import { useState } from 'react';
import './App.css';
import Folder from './componets/Folder.js';
import explorer from './data/folderData.js';
import usetraverse from './hooks/usetraversetree.js'

function App() {
  const [explorerState, setExplorerState] = useState(explorer);
  const {insertNode} = usetraverse();
  const insertnewfolder = (folderid,item,isFolder) => {
    const finalTree = insertNode(explorerState,folderid,item,isFolder)
    setExplorerState(finalTree)
  }
  return (
    <div className="App">
      <Folder explorerData = {explorer} insertnewfolder={insertnewfolder}/>
    </div>
  );
}

export default App;
