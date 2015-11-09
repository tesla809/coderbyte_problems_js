function firstFactorial(n){
    if(n === 1)
        return 1;
    return n * firstFactorial(n-1);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
firstFactorial(readline());           
