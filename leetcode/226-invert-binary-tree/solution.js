/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
  if (root === null) return root;
  let stack = [root]

  while (stack.length !== 0) {
    let current = stack.pop();
    let rightNode = current.right;
    let leftNode = current.left;
    current.left = rightNode;
    current.right = leftNode;
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return root;

};