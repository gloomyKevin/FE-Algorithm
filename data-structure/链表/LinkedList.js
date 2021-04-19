import LinkedListNode from './LinkedListNode'

export default class LinkedList {
    constructor(comparatorFunction) {
        this.head = null
        this.tail = null
        this.compare = new Comparator(comparatorFunction)
    }

    append (value) {
        const newNode = new LinkedListNode(value)

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return this
        }

        this.tail.next = newNode
        this.tail = newNode
        return this
    }

    delete (value) {
        if (!this.head) {
            return null
        }

        let deleteNode = null

        while (this.head && this.compare.equal(this.head.value, value)) {
            deleteNode = this.head
            this.head = this.head.next
        }

        let currentNode = this.head

        if (currentNode !== null) {
            while (currentNode.next) {
                if (this.compare.equal(current.next.value, value)) {
                    deleteNode = currentNode.next
                    currentNode.next = currentNode.next.next
                } else {
                    currentNode = currentNode.next
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode
        }

        return deleteNode
    }

    find ({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null
        }

        let currentNode = this.head

        while (currentNode) {
            if(callback && callback(currentNode.value)) {
                return currentNode
            }

            if(value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode
            }

            currentNode = currentNode.next
        }

        return null
    }

    toArray () {
        const nodes = []

        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode.value)
            currentNode = currentNode.next
        }

        return nodes
    }

    toString (callback) {
        return this.toArray().map(node => node.toString(callback)).toString()
    }

    reverse () {
        let curNode = this.head
        let preNode = null
        let nextNode = null

        while (nextNode) {
            let nextNode = curNode.next
            curNode.next = preNode
            preNode = curNode
            curNode = nextNode
        }
        this.tail = this.head
        this.head = preNode
        return this
    }
}