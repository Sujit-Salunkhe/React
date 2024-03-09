import { useState } from 'react';
import './App.css';
import Folder from './componets/Folder.js';
import explorer from './data/folderData.js';
import useTraverse from './hooks/usetraversetree.js'


function App() {
  const [explorerState, setExplorerState] = useState(explorer);
  const {insertNode,deleteNode,changeName} = useTraverse();
  
  const insertNewFolder = (folderId,item,isFolder) => {
    const finalTree = insertNode(explorerState,folderId,item,isFolder)
    setExplorerState(finalTree)
  }
  const deleteFolder = (folderId) => {
    const finalTree2 = deleteNode(explorerState,folderId)
    setExplorerState(finalTree2)
  }
  const changeFolder = (folderId,value) => {
    const finalTree = changeName(explorerState,folderId,value)
    setExplorerState(finalTree)
  }
  return (
    <div className="App">
      <Folder explorerData = {explorerState} insertNewFolder = {insertNewFolder} deleteFolder={deleteFolder} changeFolder={changeFolder}/>
    </div>
  );
}

export default App;
