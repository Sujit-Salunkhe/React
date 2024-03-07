import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const Folder = ({ insertnewfolder = () => {}, explorerData }) => {
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState({
    visible: false,
    isFolder: false,
  });
  const handleDisplay = (e) => {
    setExpand(!expand);
  };
  const insertFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShow({ visible: true, isFolder });
  };
  const addFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
      insertnewfolder(explorerData.id,e.target.value,show.isFolder)
      setShow({
        ...show,visible:false
      })
    }
  }
  const deleteFolder = () => {

  }
  if (explorerData.isFolder) {
    return (
      <div className="main-container">
        <div className="container" onClick={(e) => handleDisplay(e)}>
          <span className="foldercontainer">📁 {explorerData.name}</span>
          <div>
            <button className="buttons" onClick={(e) => insertFolder(e, true)}>
              Folder +
            </button>
            <button className="buttons" onClick={(e) => insertFolder(e, false)}>
              File +
            </button>
            <button className="buttons" onClick={(e) => deleteFolder(e, false)}>
              <MdDelete/> delete 
            </button>
          </div>
        </div>
        <div
          style={{ paddingLeft: "30px", display: expand ? "block" : "none" }}
        >
          {show.visible && (
            <div>
              <span>{show.isFolder ? "📁" : "📄"}</span>
              <input type="text"  className="inputbox" onBlur={()  => setShow({ ...show, visible: false })}  
              onKeyDown={addFolder} autoFocus />
            </div>
          )}
          {explorerData.items.map((exp) => {
            return <Folder key={exp.id} explorerData={exp} insertnewfolder={insertnewfolder} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorerData.name}</span>;    
  }
};

export default Folder;
