const BST = require('./BinarySearchTree');
//1 - Draw some BSTs

/* SEE GIST
https://gist.github.com/mweedman/a8f619fef6233b709c99eb1667c9d4fe
*/


//2 - Remove the Root

/* SEE GIST
https://gist.github.com/mweedman/a8f619fef6233b709c99eb1667c9d4fe
*/

//3 - Create the BST class

function numberTree() {
  let firstTree = new BST();
  firstTree.insert(3, 3);
  firstTree.insert(1, 1);
  firstTree.insert(4, 4);
  firstTree.insert(6, 6);
  firstTree.insert(9, 9);
  firstTree.insert(2, 2);
  firstTree.insert(5, 5);
  firstTree.insert(7, 7);

  return firstTree;
}

function letterTree() {
  let lTree = new BST();

  lTree.insert('E', 'E');
  lTree.insert('A', 'A');
  lTree.insert('S', 'S');
  lTree.insert('Y', 'Y');
  lTree.insert('Q', 'Q');
  lTree.insert('U', 'U');
  lTree.insert('E', 'E');
  lTree.insert('S', 'S');
  lTree.insert('T', 'T');
  lTree.insert('I', 'I');
  lTree.insert('O', 'O');
  lTree.insert('N', 'N');

  lTree.remove('E');
  // console.log('@Y: ', lTree.find('Y'));
  return lTree;
}
 
// console.log(numberTree());
// letterTree();
// console.log();

//4 - What does this program do?

//  This function sums the values of all of the nodes in the tree. //

//5 - Height of a BST
let heightCount = 0;
function height(tree) {

  if (!tree) {
    return;
  }
  else if (!tree.left && !tree.right) {
    heightCount++;
    return heightCount;
  }
  else if (tree.right) {
    heightCount++;
    height(tree.right);
  }
  else if (tree.left) {
    heightCount++;
    height(tree.left);
  }

  return 'The height of the tree is: ' + heightCount;
}

console.log(height(numberTree()));

//6 - Is it a BST?
// make a fake tree!
function invalidTree() {
  let firstTree = new BST();
  firstTree.insert(3, 3);
  firstTree.insert(1, 1);
  firstTree.badinsert(8, 8);
  firstTree.insert(4, 4);
  firstTree.insert(6, 6);
  firstTree.insert(9, 9);
  firstTree.insert(2, 2);
  firstTree.insert(5, 5);
  firstTree.insert(7, 7);
  
  return firstTree;
}



let counter = 0;
function isItBST(tree, right, left) {
  counter++;
  if (tree.key) {
    console.log(`Iteration num: ${counter}, currently on node key=${tree.key}.`);
  }
  if(tree === null) {
    return true;
  }
  if((tree.left && tree.value <= tree.left.value) || (tree.right &&tree.value > tree.right.value)) {
    return false;
  }
  return isItBST(tree.left, right, tree.value) && isItBST(tree.right, tree.value, left);
}
//Should have been done with switch/case?

console.log(isItBST(invalidTree()));


//7 - 3rd Largest Node

//recursive
//input: tree
//1st: test if it has 3 branches right of root
//2nd: count back
//3rd: return value?
//output: 3rd largest value
function nthLargest(tree, n) {
  
  return ;
}

nthLargest(numberTree(), 3);

//8 - Balanced BST Algorithm

//9 - Are they the same BSTs?
