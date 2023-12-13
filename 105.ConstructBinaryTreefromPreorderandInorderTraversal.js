https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/?envType=study-plan-v2&envId=top-interview-150


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function buildTreeHelper(preStart, preEnd, inStart, inEnd) {
        if(preStart > preEnd || inStart > inEnd) {
            return null;
        }

        const rootValue = preorder[preStart];
        const root = new TreeNode(rootValue);

        const rootIndexInorder = inorder.indexOf(rootValue);

        root.left = buildTreeHelper(preStart + 1, preStart + rootIndexInorder - inStart, inStart, rootIndexInorder - 1);
        root.right = buildTreeHelper(preStart + rootIndexInorder - inStart + 1, preEnd,  rootIndexInorder + 1, inEnd);

        return root;
    }
    
    return buildTreeHelper(0, preorder.length - 1, 0, inorder.length -1);
};
