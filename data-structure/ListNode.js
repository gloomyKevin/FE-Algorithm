// 单链表结构
function List() {
    let Node = function (element) {
        this.element = element;
        this.next = null
    }
    // 初始头结点为null
    let head = null;

    // 链表长度
    let length = null;

    this.getLength = function () { return length };
    this.search = function (list, element) { };
}

function append(element) {
    let node = new Node(element),
        p = head;
    if (!head) {
        head = node;
    } else {
        while (p.next) {
            p = p.next;
        }
        p.next = node;
    }
    length++
}

// 测试
let list = new List()
for (let i = 0; i < 5; i += 1) {
    list.append(i)
}

// 判断链表中是否存在某节点
function search(element) {
    let p = head;
    if (!p) {
        return false;
    }
}