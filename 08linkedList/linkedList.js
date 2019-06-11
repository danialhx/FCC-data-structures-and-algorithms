/* LinkedList */

function LinkedList() {
    var length = 0;                     // initialisation, empty linked list
    var head = null;                    // initialisation, no head at the momnet

    var Node = function(element){
        this.element = element;         // new element
        this.next = null;               // next will be null
    };

    this.size = function(){
        return length;                  // size of linkedList
    };

    this.head = function(){
        return head;                    // returns current head
    };

    this.add = function(element){           // new elements
        var node = new Node(element);       // creates new node with the element
        if(head === null){                  // if zero node
            head = node;                    // will use the element as the head
        } else {
            var currentNode = head;         // starts at the head

            while(currentNode.next){              // while there is another node
                currentNode = currentNode.next;
            }

            currentNode.next = node;              // make the current Node next with the element
        }

        length++;                                 // length will increase
    };
    
    this.remove = function(element){                    // removing nodes with element stated
        var currentNode = head;                         // starting at the head
        var previousNode;                               //
        if(currentNode.element === element){            // if current node is element, starting at the head
            head = currentNode.next;                    // changing the nextNode to head, as head will be removed
        }else{
            while(currentNode.element !== element){     // current node is not the element
                previousNode = currentNode;             // previous node changes to currentNode
                currentNode = currentNode.next;         // moving current node to next
            }

            previousNode.next = currentNode.next;       // moving in the linkedList
        }

        length --;                                      // reducing size of the LinkedList
    };

    this.isEmpty = function(){
        return length === 0;                            // function to see if empty, will only return 0
    };

    this.indexOf = function(element) {                  // looking for the position of an element
        var currentNode = head;                         // initialise from the head
        var index = -1;                                 // initialise index variable.

        while(currentNode){                             
            index++;                                    // at the head index will ++
            if(currentNode.element === element){        // if now, return current index
                return index;
            }
            currentNode = currentNode.next;             // loop to move in the linked list. 
        }

        return -1;                                      // index -1, to mean element not in the linkedList
    };

    this.elementAt = function(index){                  // function to find element at a certain index
        var currentNode = head;                        // initialise at the head
        var count = 0;                                 // initialise count at 0
        while (count < index){                         // while less than index, as per stated for the element 
            count ++;                                  // increment count
            currentNode = currentNode.next;            // move the next node to current node
        }
        return currentNode.element;                    // while loop stops as index is reached and will issue the currentNode the loops stops at, according to the index
    };


    this.addAt = function(index, element){              // adding an element at a certain index
        var node = new Node(element);                   // new node with the element

        var currentNode = head;                         // initialise at the head
        var previousNode;                               // initialise previous node
        var currentIndex = 0;                           // initialise index
        
        if (index > length){                            // will not start the function except returning false
            return false;                                       
        }

        if(index === 0){                                // when starts at the head
            node.next = currentNode;                    // initialise next as current node
            head = node;                                // and the node as the head
        }else {
            while(currentIndex < index) {               // for post index 0
                currentIndex++;                         // increment index
                previousNode = currentNode;             // changing the nodes, as the element is added
                currentNode = currentNode.next;         // changing the nodes
            }
            node.next = currentNode;                    
            previousNode.next = node;
        }  
        length++;                                        // increment length as new element added
    }

    this.removeAt = function(index) {                    // similar to .addAt  
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        if (index < 0 || index >= length){              // will not move, and return null
            return null;
        }
        if(index === 0){                                // starts at head
            head = currentNode.next;                    // next node will be the head
        } else {
            while (currentIndex < index){               // after head 
                currentIndex ++;                        // using loop to move through
                previousNode = currentNode;             // changing nodes post removal
                currentNode = currentNode.next;         // changing nodes post removal
            }
            previousNode.next = currentNode.next;       // changing the nodes post removal
        }
        length--;                                       // decrease the length 
        return currentNode.element;                     // 
    }
}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());
