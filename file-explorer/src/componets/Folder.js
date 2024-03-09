import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import InputBox from "./InputBox";

const Folder = ({
  insertNewFolder = () => {},
  deleteFolder = () => {},
  changeFolder = () => {},
  explorerData,
}) => {
  const [expand, setExpand] = useState(false);
  const [nameChange, setNameChange] = useState(false);
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
    if (e.keyCode === 13 && e.target.value) {
      insertNewFolder(explorerData.id, e.target.value, show.isFolder);
      setShow({
        ...show,
        visible: false,
      });
    }
  };
  const handleDelete = (e) => {
    e.stopPropagation();
    deleteFolder(explorerData.id);
  };
  const handleNameChange = (e) => {
    e.stopPropagation();
    setNameChange(true);
  };


  if (explorerData.isFolder) {
    return (
      <div className="main-container">
        {nameChange ? (
          <InputBox
            isFolder={true}
            setName={setNameChange}
            changeFolder={changeFolder}
            explorerData={explorerData}
          />
        ) : (
          <div className="container" onClick={(e) => handleDisplay(e)}>
            <span className="foldercontainer">📁 {explorerData.name}</span>
            <div className="buttons-container">
              <button
                className="buttons"
                onClick={(e) => insertFolder(e, true)}
              >
                Folder +
              </button>
              <button
                className="buttons"
                onClick={(e) => insertFolder(e, false)}
              >
                File +
              </button>
              <button
                className="buttons delete-btn"
                onClick={(e) => handleDelete(e)}
              >
                delete <MdDelete className="det-icon" />
              </button>
              <button className="buttons" onClick={(e) => handleNameChange(e)}>
                Change Name
              </button>
            </div>
          </div>
        )}
        <div
          style={{ paddingLeft: "30px", display: expand ? "block" : "none" }}
        >
          {show.visible && (
            <div>
              <span>{show.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="inputbox"
                onBlur={() => setShow({ ...show, visible: false })}
                onKeyDown={addFolder}
                onChange={handleNameChange}
                autoFocus
              />
            </div>
          )}
          {explorerData.items.map((exp) => {
            return (
              <Folder
                key={exp.id}
                explorerData={exp}
                insertNewFolder={insertNewFolder}
                deleteFolder={deleteFolder}
                changeFolder={changeFolder}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        {nameChange ? (
          <InputBox isFolder={false} setName={setNameChange} changeFolder={changeFolder} explorerData={explorerData}/>
        ) : (
          <span className="file">
            📄 {explorerData.name}
            <div className="file-btns">
              <button className="buttons" onClick={(e) => handleDelete(e)}>
                <MdDelete /> delete
              </button>{" "}
              <button className="buttons" onClick={(e) => handleNameChange(e)}>
                Change Name
              </button>{" "}
            </div>
          </span>
        )}
      </>
    );
  }
};

export default Folder;
