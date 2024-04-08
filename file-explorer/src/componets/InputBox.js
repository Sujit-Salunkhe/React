const InputBox = ({ isFolder, setName, changeFolder, explorerData }) => {
  const handleName = (e) => {
    if (e.keyCode === 13) {
      setName(false);
      changeFolder(explorerData.id, e.target.value);
      
    
    }
  };
  return (
    <div>
      <span>{isFolder ? "📁" : "📄"}</span>
      <input
        type="text"
        className="inputbox"
        autoFocus
        onKeyDown={handleName}
        onBlur={(e) => setName(false)}
      />
    </div>
  );
};

export default InputBox;
