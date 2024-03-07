import React, { useState } from "react";

const Folder = ({ explorerData }) => {
  const [expand, setExpand] = useState(false);
  const [show, setShow] = useState({
    visible: false,
    isFolder: false,
  });
  const handleDisplay = (e) => {
    // setShow({ ...show, visible: false });
    setExpand(!expand);
  };
  const insertFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShow({ visible: true, isFolder });
  };
  const addFolder = (e) => {
    if(e.keyCode === 13 && e.target.value){
      
    }
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
          </div>
        </div>
        <div
          style={{ paddingLeft: "30px", display: expand ? "block" : "none" }}
        >
          {show.visible && (
            <div>
              <span>{show.isFolder ? "📁" : "📄"}</span>
              <input type="text"  className="inputbox" onBlur={()  => setShow({ ...show, visible: false })}  onKeyDown={ addFolder} autoFocus />
            </div>
          )}
          {explorerData.items.map((exp) => {
            return <Folder key={exp.id} explorerData={exp} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorerData.name}</span>;
  }
};

export default Folder;
