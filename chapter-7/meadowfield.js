const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
];
const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

const roadGraph = buildGraph(roads);

function buildGraph(edges){
    let graph = Object.create(null);

    function addEdge(from, to){
        if(graph[from] == null){
            graph[from] = [to];
        }else{
            graph[from].push(to);
        }
    }

    for(let [from, to] of edges.map(r => r.split("-"))){
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
        if(!roadGraph[this.place].includes(destination)){
            return this;
        }else{
            let parcels = this.parcels.map(p => {
                if(p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);

            return new VillageState(destination, parcels);
        }
    }
}

function runRobot(state, robot, memory){
    for(let turn = 0;;turn++){
        if(state.parcels.length == 0){
            console.log(`Done in ${turn} turns`);
            return turn;
            // break;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array){
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state){
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5){
    let parcels = [];
    for(let i = 0; i < parcelCount; i++){
        let address = randomPick(Object.keys(roadGraph));
        let place;

        do{
            place = randomPick(Object.keys(roadGraph));
        }while(place == address);

        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

function routeRobot(state, memory){
    if(memory.length == 0){
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to){
    let work = [{at: from, route: []}];
    for(let i = 0; i < work.length; i++){
        let {at, route} = work[i];
        
        for(let place of graph[at]){
            if(place == to) return route.concat(place);
            if(!work.some(w => w.at == place)){
                work.push({at: place, route: route.concat(place)});
            }
        }
    }
}

function goalOrientatedRobot({place, parcels}, route){
    if(route.length == 0){
        let parcel = parcels[0];

        if(parcel.place != place){
            route = findRoute(roadGraph, place, parcel.place);
        }else{
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

function compareRobots(robot1, robot2){
    let state;
    let robot1Average = [];
    let robot2Average = [];

    for(let i = 0; i < 100; i++){
        state = VillageState.random();
        robot1Average.push(runRobot(state, robot1.bot, robot1.memory)); // random robot
        robot2Average.push(runRobot(state, robot2.bot, robot2.memory)); // route robot
    }

    console.log(`Robot 1 average: ${robot1Average.reduce((previous, current) => previous + current)/100}`);
    console.log(`Robot 2 average: ${robot2Average.reduce((previous, current) => previous + current)/100}`);
}

// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
runRobot(VillageState.random(), goalOrientatedRobot, []);

let robot1 = {
    bot: goalOrientatedRobot,
    memory: []
}

let robot2 = {
    bot: routeRobot,
    memory: []
}

// compareRobots(robot1, robot2);

// let first = new VillageState("Post Office", [{place: "Post Office", address: "Alice's House"}]);
// let next = first.move("Alice's House");

// console.log(next.place);
// console.log(next.parcels);
// console.log(first.place);
// console.log(first.parcels);

// let object = {value: 5};
// Object.freeze(object);
// object.value = 10;
// console.log(object.value);



