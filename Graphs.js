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

// Various ways to represent graphs

//     2 - 0
//    / \
//   1 - 3

// Edge List
const graph = [[0,2],[2,3],[2,1],[1,3]];

// Adjacency List
const graph = [[2], [2,3], [0,1,3], [1,2]];

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