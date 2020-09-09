/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  双指针法
var reverseList = function (head) {
    let pre = null;
    let curr = head;
    let next = head;

    while (curr !== null) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre
};

// 递归法
