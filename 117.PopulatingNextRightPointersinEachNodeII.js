https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null;
    }

    let levelStart = root;

    while (levelStart) {
        let current = levelStart;
        let dummy = new Node();
        let prev = dummy;

        while (current) {
            if (current.left) {
                prev.next = current.left;
                prev = prev.next;
            }
            if (current.right) {
                prev.next = current.right;
                prev = prev.next;
            }

            current = current.next;
        }

        levelStart = dummy.next;
    }

    return root;
};
