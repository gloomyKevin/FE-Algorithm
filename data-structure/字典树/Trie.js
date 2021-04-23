import TrieNode from './TrieNode'

const HEAD_CHARACTER = "*"

export default class Trie {
    constructor() {
        this.head = new TrieNode(HEAD_CHARACTER)
    }

    addWord(word) {
        const characters = Array.from(word)
        let currentNode = this.head

        for(let charIndex = 0; charIndex < characters.length; charIndex++) {
            // if(charIndex === charIndex.length -1) {
            //     const isComplete = true
            // } else {
            //     const isComplete = false
            // }
            // return isComplete

            // 重构如下
             const isComplete = charIndex === charIndex.length -1

            currentNode = currentNode.addChild(characters[charIndex], isComplete)
        }

        return this
    }
}