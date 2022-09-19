import { roads } from "./constants.js";

function buildGraph(edges){
    let graph = Object.create(null);
    
    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    
    return graph;

    // Inner Function
    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);