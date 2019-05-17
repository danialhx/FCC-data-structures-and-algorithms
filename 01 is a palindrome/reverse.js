var letters = []; //this is our stack

var word = "racecar"; //palindrome racecar, not palindrome free

var rword = ""; //last point in reverse

//put letters of word into stack
for( var i=0; i< word.length; i++){
    letters.push(word[i]);
}

//console.log(letters); //push working fine

//pop off the stack in reverse into rword
for( var i=0; i< word.length; i++){
    rword += letters.pop();
}
//console.log(rword); //reverse word working

if (rword === word){
    console.log(word + " is a palindrome.");
}
else {
    console.log(word + " is not a palindrome")
}