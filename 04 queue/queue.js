/* Queue*/

function Queue(){
    collection = [];
    this.print = function(){            // function to console.log the  collection  
        console.log(collection);
    };
    this.enqueue = function(element){   // function to add elements into the empty collection
        collection.push(element);
    };
    this.dequeue = function(){          // function to remove the first item in the array, shift will do it.  
        return collection.shift();
    };
    this.front = function(){            // function front - will show index 0
        return collection[0];
    };
    this.size = function(){             // function to .length the collection
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0); // function to say array is empty
    };
}

var q = new Queue();        // redefining Queue() to q
q.enqueue('a');             // push "a"   
q.enqueue('b');             // push "b" 
q.enqueue('c');             // push "c"
q.print();                  // console.log the array
q.dequeue();                // removes first element in array
console.log(q.front());     // console.log + 1st element only
q.print();                  // console.log the current array

function PriorityQueue() {
    var collection = [];
    this.printCollection = function(){                  // print 2nd array
        (console.log(collection));
    };
    this.enqueue = function(element){
        if (this.isEmpty()){                            // setup for first element, condition if array empty it will
            collection.push(element);                   // push an element
        }else {                                         // or                 
            var added = false;                          // initialise var added =false
            for (var i=0; i<collection.length; i++){    // parse the collection array post false, will parse in collection
                if (element[1] < collection[i][1]){     // element is an array, look at the number(b,2)or (c,3) less than the existing element in the array(a,2)
                    collection.splice(i,0,element);     // it will push infront of the 1st push, and i=1 will go in 
                    added = true;                       // added will be true
                    break;
                }
            }
            if(!added){                                 // if added=false
                collection.push(element);               // will push element
            }
        }
    };
    this.dequeue = function(){
        var value = collection.shift(); // function to remove first in array
        return value[0];                // and will return zeroth element
    };
    this.front = function(){
        return collection[0];           // function to shows zeroth in array.
    };
    this.size = function(){
        return collection.length;       // function to count size of array.
    };
    this.isEmpty = function(){
        return(collection.length ===0); // will return true if array length =0, or empty.
    };
};

var pq = new PriorityQueue();           // redefine the PriorityQueue();
pq.enqueue(['Beau Carnes',2]);          // collection = [(beau,2)] 
pq.enqueue(['Quincy Larson',3]);        // collection = [(beau,2),(quincy,3),], i =0
pq.enqueue(['Ewa Mitulska-Wojcik',1]);  // collection = [(ewa,1),(beau,2),(quincy,3)] ,i=1
pq.enqueue(['Briana Swift',2]);         // collection = [(ewa,1),(beau,2),(briana,2),(quincy,3)] , i=2
pq.printCollection();                   // console.log the current array
pq.dequeue();                           // remove 1st element,index0
pq.front();                             // console.log zeroth element
pq.printCollection();                   // console.log the current array

//