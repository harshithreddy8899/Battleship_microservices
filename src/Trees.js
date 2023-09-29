function Trees(){
  let treeRoot=null;
  function TreeNode(data,left=null,right=null){
    return{data,left,right};
   }
   function generateTree(array){
    if(array.length===0)
      return null;
    const mid=Math.floor(array.length/2);
    const root=TreeNode(array[mid],generateTree(array.slice(0,mid)),generateTree(array.slice(mid+1,array.length)));
    treeRoot=root;
    return treeRoot;

   }
   function insert(value) {
    if (treeRoot === null) {
      treeRoot = TreeNode(value);
      return;
    }
  
    let treeHead = treeRoot;
  
    while (true) {
      if (value < treeHead.data) {
        if (treeHead.left === null) {
          treeHead.left = TreeNode(value);
          return;
        }
        treeHead = treeHead.left;
      } else {
        if (treeHead.right === null) {
          treeHead.right = TreeNode(value);
          return;
        }
        treeHead = treeHead.right;
      }
    }
  }  
  function deletes(value) {
    let currentNode = treeRoot;
    let parentNode = null;
  
    // Find the node with the given value
    while (currentNode !== null && currentNode.data !== value) {
      parentNode = currentNode;
  
      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  
    // If the value is not found, throw an error
    if (currentNode === null) {
      throw new Error("Value not found");
    }
  
    // Case 1: Node has no children (leaf node)
  if(currentNode.left==null&&currentNode.right==null)
  {
    if(parentNode==null){
      treeRoot=null;
    }
    else if(parentNode.left===currentNode){
      parentNode.left=null;
    }
    else{
      parentNode.right=null;
    }
  }
  else if(currentNode.left==null||currentNode.right==null){
    const childNode = currentNode.left || currentNode.right;
    if(parentNode==null)
    {
      treeRoot=childNode;
    }
    else if(parentNode.left===currentNode){
      parentNode.left=childNode;
    }
    else
    {
      parentNode.right=childNode; 
    }
  }
  else{
    let replacementNode=currentNode.right;
    let replacementParent=currentNode;
    while(replacementNode.left!=null){
      replacementParent=replacementNode;
      replacementNode=replacementNode.left;
    }
    currentNode.data=replacementNode.data;
    if(replacementParent.left===replacementNode){
      replacementParent.left=replacementNode.right;
    }
    else
    {
      replacementParent.right=replacementNode.right;
    }
  }
}
  function find(value)
  {
    let current=treeRoot;
    while(current!==null)
    {
      if(current.data===value)
      {
        break;
      }
      else if(current.data>value){
        current=current.left;}
      else{
        current=current.right;
      }
    }
    return current;
  }
   function prettyPrint(node, prefix = "", isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
  function levelOrder(generateLevel){
    const queue=[];
    const result=[];
    queue.push(treeRoot);
    while(queue.length!==0){
      const val=queue[0];
      generateLevel(val);
      queue.shift();
      if(val.left!=null)
      {
        queue.push(val.left);
      }
      if(val.right!=null)
      {
        queue.push(val.right);
      }
   }
   return result;
  }
  function inorderTraversal(root,result,callback)
  {
    if(root==null)
      return;
    inorderTraversal(root.left,result,callback);
    callback(root);
    result.push(root.data);
    inorderTraversal(root.right,result,callback);
  }
  function preorderTraversal(root,result,callback)
  {
    if(root==null)
      return;
    callback(root);
    result.push(root.data);
    preorderTraversal(root.left,result,callback);
    preorderTraversal(root.right,result,callback);
  }
  function postorderTraversal(root,result,callback)
  {
    if(root==null)
      return;
    postorderTraversal(root.left,result,callback);
    postorderTraversal(root.right,result,callback);
    callback(root);
    result.push(root.data);
  }
  function height(root,level){
    if(root==null)  
      return level;
    return Math.max(height(root.left,level+1),height(root.right,level+1));
  }
  function depth(val){
    let current=treeRoot;
    let depths=1;
    while(current!=null)
    {
      if(current.data===val)
        break;
      else if(current.data<val)
      {
        current=current.right;
        depths+=1;
      }
      else  
      {
        current=current.left;
        depths+=1;
      }
    }
    return depths;
  }
  function balanced(root,callback){
    if(root==null)
      return 0;
    if(root.left==null&&root.right==null)
      return 1;
    const k=balanced(root.left,callback);
    const t=balanced(root.right,callback);
    if((k-t)>1||((t-k))*-1>1)
      callback();
    return 1+Math.max(k,t);
  }
  function balanceTree(treeHead){
    const result=[];
    const callbacks=()=>{};
    inorderTraversal(treeHead,result,callbacks);
    result.sort();
    generateTree(result);
    prettyPrint(treeRoot);
  }
   return { TreeNode,
            generateTree,
            prettyPrint,
            insert,
            deletes,
            find,
            levelOrder,
            inorderTraversal,
            postorderTraversal,
            preorderTraversal,
            height,
            depth,
            balanced,
            balanceTree
          };
 }
 
 export default Trees;