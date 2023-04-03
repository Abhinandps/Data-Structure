
class WeightedGraph{
    constructor(){
        this.adjacentList = {}
    }

    addVertex(vertex){
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = new Set()
        }
    }

    addEdges(vertex1,vertex2,weight){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2)
        }

        this.adjacentList[vertex1].add({node:vertex2,weight:weight})
        this.adjacentList[vertex2].add({node:vertex1,weight:weight})
    }

    removeEdges(vertex1, vertex2) {
        if (this.adjacentList[vertex1]) {
          this.adjacentList[vertex1] = new Set(
            [...this.adjacentList[vertex1]].filter(
              (neighbor) => neighbor.node !== vertex2
            )
          );
        }
        if (this.adjacentList[vertex2]) {
          this.adjacentList[vertex2] = new Set(
            [...this.adjacentList[vertex2]].filter(
              (neighbor) => neighbor.node !== vertex1
            )
          );
        }
      }

    removeVertex(vertex){
        if(this.adjacentList[vertex]){
            for(let item of this.adjacentList[vertex]){
                this.removeEdges(vertex,item.node)
            }

            delete this.adjacentList[vertex]
        }
    }
   

    display(){
        let list =''
        for(let vertex in this.adjacentList){
            list+=`${vertex} -> `
            for(let value of this.adjacentList[vertex]){
                list+=`${value.node} ${value.weight} `
            }
            list+=`\n`
        }
        console.log(list);
    }

    

}

const g = new WeightedGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")

g.addEdges("A","B",5)
g.addEdges("B","C",2)

g.removeEdges("B","C")
g.removeVertex("C")



g.display()

console.log(g.adjacentList);



