// 基于邻接表实现graph
// 第一版：使用数组存储adjacents
// const graph = {
//     a：[ 'a'，'b' ]，
//     b：[ 'c' ]，
//     c：[ 'd' ]，
//     d：[ 'b'，'c' ]
//   };
// Node为顶点类，类中保存顶点自身以及其相邻顶点合集
// 用于在邻接表中增加或删除相邻的顶点
class Node {
    constructor(value) {
        this.value = value
        this.adjacents = []
    }

    addAdjacent(node) {
        this.addAdjacent.push[node]
    }

    removeAdjacent(node) {
        const index = this.adjacents.indexOf(node)
        if(index > -1) {
            this.adjacents.splice(index, 1)
            return node
        }
    }

    getAdjacents() {
        return this.adjacents
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1
    }
}

class Graph {
    constructor(edgeDirection = Graph.DIRECTION) {
        this.nodes = new Map()
        this.edgeDirection = edgeDirection
    }

    addEdge(source, destination) {
        const sourceNode = this.addVertex(source)
        const destinationNode = this.addVertex(destination)
        sourceNode.addAdjacent(destinationNode)
        if(this.edgeDirection === Graph.UNDIRECTION) {
            destinationNode.addAdjacent(sourceNode)
        }
        return [sourceNode, destinationNode]
    }

    removeEdge(source, destination) {
        
    }

    addVertex(value) {
        if(this.nodes.has(value)) {
            return this.nodes.get(value)
        } else {
            const vertex = new Node(value)
            this.nodes.set(value, node)
            return vertex
        }
    }

    removeVertex(value) {
        const current = this.nodes.get(value)
        if(current) {
            for(const node of this.nodes.value()) {
                node.removeAdjacent(current)
            }
        }
        return this.nodes.delete(value)
    }
}

Graph.UNDIRECTION = symbol('directed graph')
Graph.DIRECTION = symbol('undirected graph')