

const useTraverseTree = () => {
    const  insertNode = (tree,folderId,item,isFolder) => {
        // console.log("here")
        console.log(tree.id,folderId)
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id: new Date().getTime(),
                name:item,
                isFolder:isFolder,
                items:[]
            });
            return tree
        }
        let latestNode = []

        latestNode = tree.items.map(obj => {
            return insertNode(obj,folderId,item,isFolder)
        })
        return {...tree,items: latestNode};
    };

    const deleteNode = (tree,folderId) =>{
        if(tree.id === folderId){
                return tree = null
        }
        else{
            tree.items.map(val => {
                if(val.id === folderId){
                    return val = null
                }
            })
        }
    }
return {insertNode,deleteNode}
}

export default useTraverseTree
