

class PriorityQueue {
    constructor() {
      this.heap = [];
    }
    
    parentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    leftChildIndex(i) {
        return 2 * i + 1
    }

    rightChildIndex(i) {
        return 2 * i + 2
    }
    
    enqueue(value, priority) {
        this.heap.push({ value, priority })
        let i = this.heap.length - 1
        while (i > 0) {
            let parentIndex = this.parentIndex(i)
            if (this.heap[i].priority < this.heap[parentIndex].priority) {
                [this.heap[i], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[i]]
                i = parentIndex
            }
            else return
        }
    }

    dequeue() {
        if (this.heap.length === 0) {
            return null
        }
        else if (this.heap.length === 1) {
            return this.heap.pop().value
        }
        else {
            const min = this.heap[0].value
            this.heap[0] = this.heap.pop()
            let i = 0
            this.shiftDown(i, this.heap.length - 1)
            return min
        }

    }

    shiftDown(i, n) {
        let smallest = i
        let left = this.leftChildIndex(i)
        let right = this.rightChildIndex(i)

        if (left < n && this.heap[left].priority < this.heap[smallest].priority) {
            smallest = left
        }

        if (right < n && this.heap[right].priority < this.heap[smallest].priority) {
            smallest = right
        }

        if (smallest != i) {
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]]
            this.shiftDown(smallest, n)
        }
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  }
  



function dijkstra(graph, startNode, endNode) {
    // Create an object to store the distances from the startNode to all other nodes
    const distances = {};
    // Create an object to store the shortest path to each node
    const shortestPath = {};
    // Create a priority queue to keep track of the nodes to visit
    const queue = new PriorityQueue();
  
    // Initialize the distances to all nodes as infinity except for the startNode, which has a distance of 0
    for (const node in graph) {
      distances[node] = Infinity;
    }
    distances[startNode] = 0;
  
    // Add the startNode to the priority queue
    queue.enqueue(startNode, 0);
  
    // Loop while there are nodes to visit in the queue
    while (!queue.isEmpty()) {
      // Get the node with the shortest distance from the queue
      const currentNode = queue.dequeue();
  
      // Stop if we have reached the endNode
      if (currentNode === endNode) {
        // Build the shortest path array by tracing back from endNode to startNode
        const path = [endNode];
        let parent = shortestPath[endNode];
        while (parent) {
          path.push(parent);
          parent = shortestPath[parent];
        }
        path.reverse();
        return path;
      }
  
      // Loop through the neighbors of the current node
      for (const neighbor in graph[currentNode]) {
        // Calculate the distance to the neighbor through the current node
        const distance = distances[currentNode] + graph[currentNode][neighbor];
  
        // If this distance is shorter than the previously recorded distance, update the distance and shortest path
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          shortestPath[neighbor] = currentNode;
          // Add the neighbor to the priority queue with its new distance as the priority
          queue.enqueue(neighbor, distance);
        }
      }
    }
  
    // If we get here, there is no path from startNode to endNode
    return null;
  }


  const graph = {
    A: { B: 3, C: 4, D: 2 },
    B: { A: 3, C: 4, E: 7 },
    C: { A: 4, B: 4, D: 5, E: 8 },
    D: { A: 2, C: 5 },
    E: { B: 7, C: 8 },
  };

const path = dijkstra(graph, "A", "E");
console.log(path); 

  