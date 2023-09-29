import Trees from "./Trees";

const elements = [2, 3, 4];
const tree = Trees(); // Create an instance of Trees
const treeNode = tree.generateTree(elements);
tree.prettyPrint(treeNode);
tree.insert(5);
tree.prettyPrint(treeNode);
tree.deletes(5);
tree.insert(1);
tree.insert(0);
tree.insert(-1);
tree.insert(-2);
tree.prettyPrint(treeNode);
const result=[];
const generateLevel=(val)=>{
    result.push(val.data);
  };
tree.levelOrder(generateLevel);
const result1=[];
tree.inorderTraversal(treeNode,result1,generateLevel);
const result2=[];
tree.preorderTraversal(treeNode,result2,generateLevel);
const result3=[];
tree.postorderTraversal(treeNode,result3,generateLevel);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(tree.height(treeNode,0));
console.log(tree.depth(2));
const print=()=>{
    console.log("unbalasdds")
}
tree.balanced(treeNode,print);
tree.balanceTree(treeNode);







