// import Comparator from

export default class Heap {
    constructor(comparator) {
        if (new.target) {
            throw new TypeError('Cannot construct Heap instance directly')
        }
        this.heapContainer = []
        this.compare = new comparator(comparatorFunction)
    }

    getLeftChildIndex (parentIndex) {
        return (2 * parentIndex) + 1
    }

    getRightChildIndex (parentIndex) {
        return (2 * parentIndex) + 2
    }

    // 左右childIndex都适用
    getParentIndex (childIndex) {
        return Math.floor((childIndex - 1) / 2)
    }

    hasParent (childIndex) {
        return this.getParentIndex(childIndex) >= 0
    }

    hasLeftChild (parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
    }

    hasRightChild (parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length
    }

    leftChild (parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }

    rightChild (parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    }

    parent (childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)]
    }

    // 注意，此处封装了通过下标交换节点值
    swap (a, b) {
        [this.heapContainer[a], this.heapContainer[b]] = [this.heapContainer[b], this.heapContainer[a]]
    }

    peek () {
        if (this.heapContainer.length === 0) {
            return null
        }
        return this.heapContainer[0]
    }

    poll () {

    }

    add (item) {
        this.heapContainer.push(item)
        this.heapifyUp()
        return this
    }

    // 将最后一个节点补位待删除节点，然后重新堆化
    // 注意，随机替换一个点，重新堆化时，需要选择向上或向下堆化
    // 在最后一层则向上堆化，除此之外向下堆化
    // 完全二叉树中判断最后一层：有无左子树
    remove (item, comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).pop()

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration++) {
            const indexToRemove = this.find(item, comparator).pop()

            if (indexToRemove === (this.heapContainer.length - 1)) {
                this.heapContainer.pop()
            } else {
                this.heapContainer[indexToRemove] = this.heapContainer.pop()
                const parentItem = this.parent(indexToRemove)

                if (this.getLeftChildIndex(indexToRemove)
                    && (
                        !parentItem
                        || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
                    )) {
                    this.heapifyDown(indexToRemove)
                } else {
                    this.heapifyUp(indexToRemove)
                }
            }
        }

        return this
    }

    // TODO梳理find的逻辑
    find(item, compare = this.compare) {
        const foundItemIndices = []

        for(let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex++) {
            if(comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex)
            }
        }

        return foundItemIndices
    }

    heapifyUp (customStartIndex) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1

        while (this.hasParent(currentIndex)
            && !pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex]
            ) {
            // 和父节点交换值
            this.swap(currentIndex, this.getParentIndex(currentIndex))
            // 更新当前下标值
            currentIndex = this.getParentIndex(currentIndex)
        }
        )
    }

    // 向上堆化，一定有父节点
    // 向下堆化，需要试探是否有右或左，用nextIndex存住
    heapifyDown (customStartIndex = 0) {
        let currentIndex = customStartIndex
        let nextIndex = null

        while (this.hasLeftChild(currentIndex))
            if (this.hasRightChild
                && this.pairIsInCorrectOrder(this.rightChild(currentIndex), currentIndex)
            ) {
                nextIndex = this.getRightChildIndex(currentIndex)
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex)
            }

        if (this.pairIsInCorrectOrder(
            this.heapContainer[currentIndex],
            this.heapContainer[nextIndex]
        )) {
            break
        }

        this.swap(currentIndex, nextIndex)
        currentIndex = nextIndex
    }
}