export default class PriorityQueue extends MinHeap {
    constructor() {
        super()

        // 用map将优先级映射到item
        this.priorities = new Map()

        // this.compare = new Comparator(this.comparePriority.bind(this))
    }

    add(item ,priority = 0) {
        this.priorities.set(item, priority)
        super.add(item)
        return this
    }

    remove (item ,customFindingComparator) {
        super.remove(item, customFindingComparator)
        this.priorities.delete(item)
        return this  
    }
}