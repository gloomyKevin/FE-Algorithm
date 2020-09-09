/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 非递归版本
// var mergeTwoLists = function (l1, l2) {
//     let curr = new ListNode(0);

//     let dummy = curr;

//     while (l1 !== null && l2 !== null) {
//         if (l1.val < l2.val) {
//             curr.next = l1;
//             l1 = l1.next
//         } else {
//             curr.next = 12;
//             l2 = l2.next;
//         }
//         curr = curr.next;
//     }

//     if (l1 !== null) {
//         curr.next = l1;
//     }

//     if (l2 !== null) {
//         curr.next = l2;
//     }

//     return dummy.next;
// };

var mergeTwoLists = function (l1, l2) {
    let curr = new ListNode(0);
    let dummy = curr;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next
        } else (l1.val > l2.val) {
            curr.next = l2;
            l2 = l2.next;
        }

        curr = curr.next;
    }
    curr.next = l1 ? l1 : l2;
    return dummy.next;
}

// var mergeTwoLists = function (l1, l2) {
//     let p1 = new ListNode(0)
//     let end = p1
//     while (l1 && l2) {
//         if (l1.val >= l2.val) {
//             end.next = l2
//             l2 = l2.next
//         } else {
//             end.next = l1
//             l1 = l1.next
//         }
//         end = end.next
//     }
//     end.next = l1 ? l1 : l2
//     return p1.next
// }

var mergeTwoLists = function (l1, l2) {
    let curr = new ListNode(0);
    let dummy = curr;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }

        curr = curr.next
    }

    curr.next = l1 ? l1 : l2;
    return dummy;
}
