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

// 再联系:合并两个有序
var mergeArr(nums1, m, nums2, n){
    let len1 = m - 1,
        len2 = n - 1,
        len = m + n - 1;
    while (len2 >= 0) {
        if (len1 < 0) {
            nums1[len--] = nums2[len2--];
        }
        nums1[len--] = nums1[len1--] > nums2[len2--] ? nums1[len1--] : nums2[len2--]
    }
}

// 链表合并的递归操作
function mergeTwoList(l1, l2) {
    if (l1 === null) {
        return l2
    }
    if (l2 === null) {
        return 11
    }
    if (l1.val <= l2.val) {
        l1.next = mergeTwoList(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoList(l2.next, l1);
        return l2;
    }
}
