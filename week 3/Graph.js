
// Adjacent List Graph Representation

class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacentList[vertex1].add(vertex2)
        this.adjacentList[vertex2].add(vertex1)
    }


    hasEdge(vertex1,vertex2){
        return(
            this.adjacentList[vertex1].has(vertex2) &&
            this.adjacentList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacentList[vertex1].delete(vertex2)
        this.adjacentList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacentList[vertex]){
            return 
        }

        for(let  adjacentVertex of this.adjacentList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacentList[vertex]
    }


    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex+" -> "+[...this.adjacentList[vertex]]);
        }
    }

    bfs(startingNode){
        const visited = {}
        const queue = []
        visited[startingNode] = true
        queue.push(startingNode)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr);
            const adjNodes = this.adjacentList[curr]
            for(let item of adjNodes){
                if(!visited[item]){
                    visited[item] = true
                    queue.push(item)
                }
            }            
        }
        

    }

    

    dfs(startingNode, visited = {}) {
        visited[startingNode] = true;
        console.log(startingNode);
        for (let neighbor of this.adjacentList[startingNode]) {
            if (!visited[neighbor]) {
                this.dfs(neighbor, visited);
            }
        }
    }
    
    
      
  

}

const graph = new Graph()

//Vertex Insert
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addVertex("D")
    graph.addVertex("E")
    graph.addVertex("F")

// Edge Creation
    graph.addEdges("A","B")
    graph.addEdges("B","C")
    graph.addEdges("A","F")
    graph.addEdges("E","D")
    graph.addEdges("E","A")

// console.log(graph.adjacentList);

// Display The Graph
    graph.display()

// To Check the Edges
    console.log(graph.hasEdge("A","C"));


    graph.bfs("A")
    
    // graph.dfs("A")

    // graph.removeEdge("A","B")
    // graph.removeVertex("A")
    // graph.display()

