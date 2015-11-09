// CodeByte challenge 6- Letter Capitalize

function capitalizeEachWord(string){
    var array = [];
    // treats end as an optional
    // if not placed, only capitalizes start index

    if(string === undefined){
        array = "please enter a string "+
                "and an index value "+
                "or start and end index values to capitalize";
        return array;
    }
    
    // create array
    for(var i = 0; i < string.length; i++){
        array.push(string.charAt(i));
    }
    
    array[0] = array[0].toUpperCase();
    
    // capitalize each word
    for(var j = 0; j <= array.length; j++){
        if(array[j] === " "){
            array[j + 1] = array[j + 1].toUpperCase();
        }
    }
    
    array = array.join("");
    
    return array;
}

// extra credit
//captialize letters in a range
function letterCapitalizeRange(string, start, end){
    var array = [];
    // treats end as an optional
    // if not placed, only capitalizes start index
    if (end === undefined){
        end = start;
    }
    if(string === undefined){
        array = "please enter a string "+
                "and an index value "+
                "or start and end index values to capitalize";
        return array;
    }
    
    // create array
    for(var i = 0; i < string.length; i++){
        array.push(string.charAt(i));
    }
    // capitalize in range
    for(var j = start; j <= end; j++){
        array[j] = array[j].toUpperCase();
    }
    
    array = array.join("");
    
    return array;
}

var test1 = capitalizeEachWord("hello there again");
var test2 = letterCapitalize("hello there again",0,2);

console.log(test1);
console.log(test2);


