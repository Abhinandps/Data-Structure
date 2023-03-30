

class Graph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!(this.adjacentList[vertex])){
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

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + " -> " +[...this.adjacentList[vertex]]);
        }
    }
}



const g = new Graph()

g.addVertex("A")
g.addVertex("B")

g.addEdges("A","B")
g.addEdges("A","C")
g.addEdges("B","C")



g.display()

