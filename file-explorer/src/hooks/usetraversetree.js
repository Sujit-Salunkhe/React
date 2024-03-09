const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }
    let latestNode = [];

    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };
  const deleteNode = (tree, folderId) => {
    if (tree.id === folderId) {
      return null;
    }

    const updatedItems = tree.items.map((childNode) => {
      const updatedChildNode = deleteNode(childNode, folderId);
      return updatedChildNode !== null ? updatedChildNode : undefined;
    });

    return { ...tree, items: updatedItems.filter(Boolean) };
  };

  const changeName = (tree,folderId,value) => {
    if(value){
    if(tree.id === folderId){
        return {...tree,name:value}
    }
    const updatedChildNode = tree.items.map(childNode => {
         return  changeName(childNode,folderId,value);
        
    })
    return {...tree,items:updatedChildNode}
        
    }}

  return { insertNode, deleteNode,changeName,changeName };
};

export default useTraverseTree;
