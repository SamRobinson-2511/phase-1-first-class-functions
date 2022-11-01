function receivesAFunction(aFunction){
    aFunction();
}

// - The `returnsANamedFunction` function should:
//   - take no arguments
//   - return a _named function_
function returnsANamedFunction(){
    return function namedFunction(){};
}

function returnsAnAnonymousFunction(){
    return function (){};
}


// - The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_

// function Monday(){
//     console.log('Go for a five-mile run');
//     console.log('Pump iron')
// }

// function Tuesday(){
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps');
// }

// function Wednesday(){
//     console.log('Go for a five-mile run');
//     console.log('Go for a five-mile run')
// }

// function Thursday(){
//     console.log('Go for a five-mile run');
//     console.log('Pump iron')
// }

// function Friday(){
//     console.log('Go for a five-mile run');
//     console.log('Swim 40 laps')
// }

// function runFiveMiles(){
//     console.log('Go for a five-mile run');
// }
// function liftWeights(){
//     console.log('Pump iron')
// }
// function swimFortyLaps(){
//     console.log('Swim 40 laps')
// }

// function Monday(){
//     runFiveMiles();
//     liftWeights();
// }

// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }

// function Monday(){
//     exerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivity){
//     runFiveMiles();
//     postRunActivity();
// }