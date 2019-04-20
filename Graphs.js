// Graphs
    // Internet is phenemonal example of a graph

    // TYPES
        // Directed and Undirected Graphs
            // Facebook is similar to undirected
            // Twitter is directed
        // Weighted Graphs
            // Values can assigend to the edges or other aspects.
            // Optimal path execution
            // Google maps use weighted graphs  
        // Cyclic and Acyclic
            // Cyclic graphs are common in weighted graphs

// ==========================================

// Various ways to represent graphs

//     2 - 0
//    / \
//   1 - 3

// Edge List
const graphEdge = [[0,2],[2,3],[2,1],[1,3]];

// Adjacency List
const graphAdjacent = [[2], [2,3], [0,1,3], [1,2]];

// Adjacency Matrix
const graphArray = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]
const graphObject = {
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
}

// ==========================================

// Graph Implementation

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertex(node) {
        this.adjacentList[node] = []
        this.numberOfNodes++
    }

    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }

    showConnection() {

    }
}

const myGraph = new Graph();
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
console.log(myGraph)
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')
myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')
console.log(myGraph)