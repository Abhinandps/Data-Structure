

class Graph {
    constructor() {
        this.adjacentList = {}
    }

    addVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            this.adjacentList[vertex] = new Set()
        }
    }



    addEdges(vertex1, vertex2) {
        if (!this.adjacentList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacentList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }
    display() {
        for (let vertex in this.adjacentList) {
            console.log(vertex + " -> " + [...this.adjacentList[vertex]]);
        }
    }

    hasEdges(vertex1, vertex2) {
        return (
            this.adjacentList[vertex1].has(vertex2) &&
            this.adjacentList[vertex2].has(vertex1)
        )
    }

    removeEdges(vertex1, vertex2) {
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if (!this.adjacentList[vertex]) {
            return
        }

        for (let i of this.adjacentList[vertex]) {
            this.removeEdges(vertex, i)
        }
        delete this.adjacentList[vertex]
    }

    bfs(startingNode) {
        const visited = {}
        const queue = []
        const result = []
        visited[startingNode] = true
        queue.push(startingNode)
        while (queue.length) {
            let curr = queue.shift()
            result.push(curr)
            this.adjacentList[curr].forEach(item => {
                if (!visited[item]) {
                    visited[item] = true
                    queue.push(item)
                }
            })
        }
        return result
    }

    dfs(startingNode, visited = {}) {
        visited[startingNode] = true
        console.log(startingNode);
        this.adjacentList[startingNode].forEach(item => {
            if (!visited[item]) {
                this.dfs(item,visited)
            }
        })
    }

    hasPath(startingNode, targetNode,visited={}){
        if(startingNode === targetNode){
            return true
        }
        visited[startingNode] = true
        let foundPath = false
        this.adjacentList[startingNode].forEach(item=>{
            if(!visited[item]){
                if(this.hasPath(item, targetNode,visited)){
                    foundPath = true
                    return
                }
            }
        })
        return foundPath
    }

    countEdges() {
        let numEdges = 0;
        for (let vertex in this.adjacentList) {
          numEdges += this.adjacentList[vertex].size;
        }
        // Divide by 2 since each edge is counted twice (once for each vertex)
        return numEdges / 2;
      }

      
}


const h = new Graph()

//Add Vertex

    h.addVertex("A")
    h.addVertex("B")
    h.addVertex("C")

// Add Edges

    h.addEdges("A", "B")
    h.addEdges("B", "C")
    h.addEdges("A", "C")
    // h.addEdges("A", "A")


//Remove Edges

    // h.removeEdges("B","A")
    // h.removeEdges("C","B")

//Remove Vertex

    // h.removeVertex("B")

// Check has Edges

    console.log(h.hasEdges("A","B"));
// Display With normal 
    h.display()

// BFS Breadth First Search
    console.log(h.bfs("A"));

// DFS Depth First Search
    h.dfs("A");

    console.log(h.hasPath("A","C"));

    console.log(h.countEdges());

    h.display()