function LetterChanges(str) { 
  var strArray = str.split("");
    var strNewArray = [];
    
    for(var i = 0; i < strArray.length; i++) {
        if (/(\W)/g.test(strArray[i]) === true || /([0-9])/g.test(strArray[i]) === true){
            strNewArray.push(strArray[i]);
        } else if (strArray[i] === " ") {
            strNewArray.push(" ");
            continue;
        } else {
            var character = strArray[i].charCodeAt(0);
            character += 1;
            character.toString();
            character1 = String.fromCharCode(character);
            strNewArray.push(character1);
        }
    }
        return strNewArray.join(""); 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
