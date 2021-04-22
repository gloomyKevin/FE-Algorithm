import HashTable from '../哈希表/HashTable'

export default class TrieNode {
    constructor(character, isCompleteWord = false) {
        this.character = character
        this.isCompleteWord = isCompleteWord
        this.children = new HashTable()
    }

    getChild(character) {
        return this.children.get(character)
    }

    addChild(character, isCompleteWord = false) {
        if(!this.children.has(character)) {
            this.children.set(character, new TrieNode(character, isCompleteWord))
        }

        const childNode = this.children.get(character)

        // TODO学习这一步的写法
        childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord

        return childNode
    }
}