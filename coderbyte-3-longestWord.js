function LongestWord(sen) {
    // eliminates punctuation
    sen = sen.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");

    // creates array
    var senArray = [];
    senArray = sen.split(' ').filter(function (i){return (i !== "");});
    // sort by length using anonymous function
    var value = senArray.sort(function (a,b) {return b.length - a.length});
    // get largest number
    return value[0];
}

      
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
