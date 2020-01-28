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

function main() {
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

console.log(main());

//4 - What does this program do?

//5 - Height of a BST

//6 - Is it a BST?

//7 - 3rd Largest Node

//8 - Balanced BST Algorithm

//9 - Are they the same BSTs?
