// coderbyte problem 5
// add all numbers from 1 to x

function addAll(limit){
    var sumAll = [];
    var sum = 0;
    for(var i = 0; i <= limit; i++){
        sumAll.push(i);
    }
    sum = sumAll.reduce(function(a,b){return a+b;});
    
    return sum;
}

addAll(4);