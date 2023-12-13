https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/?envType=study-plan-v2&envId=top-interview-150

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function buildTreeHelper(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) {
            return null;
        }

        const rootValue = postorder[postEnd];
        const root = new TreeNode(rootValue);

        const rootIndexInorder = inorder.indexOf(rootValue);
        const leftTreeLength = rootIndexInorder - inStart;

        root.left = buildTreeHelper(inStart, rootIndexInorder - 1, postStart, postStart + leftTreeLength - 1);
        root.right = buildTreeHelper(rootIndexInorder + 1, inEnd, postStart + leftTreeLength, postEnd - 1);

        return root;
    }
    
    return buildTreeHelper(0, inorder.length - 1, 0, postorder.length - 1);
};
