//Creates a stack
var sTack = function(){
    this.count = 0; //start 0 for empty stack
    this.storage = {}; //


    //adds a value onto the end of the stack
    this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
    }

    //Removes and returns the value at the end if the stack
    this.pop = function(){
        if(this.count === 0){ 
            return undefined; //to tell stack is undefined, or without item
        }
    
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count]; //delete stack
    return result
    }

    this.size = function(){ //to return this.count
    return this.count;
    }

    //Returns the value at the end of the stack
    this.peek = function(value){ //shows top of stack
    return this.storage[this.count-1]; //not sure...:P
    } 
}

var myStack = new sTack();

myStack.push(1); //1st top of stack as it is pushed
myStack.push(2); //2nd top of stack
console.log(myStack.peek()); //sees top of stack
console.log(myStack.pop()); //removes top of stack, and console log is to show what was removed
console.log(myStack.peek()); //shows previous top of stack post .pop()
myStack.push("freeCodeCamp")
console.log(myStack.size()); //to see the length of stack, or number of items in stack
console.log(myStack.peek()); //shows current top of stack
console.log(myStack.pop()); //removes top of stack, and console log is to show what was removed
console.log(myStack.peek()); //shows previous top of stack post .pop()
