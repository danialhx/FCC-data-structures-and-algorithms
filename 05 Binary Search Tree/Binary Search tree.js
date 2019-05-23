/*Binary Search Tree*/
//with the right node is larger, and left nodes smaller
    // the rightest node will always be the largerst
    // each level right nodes will be larger, but lower nodes can also be ;arger/smaller



class Node {
    constructor(data, left = null, right = null){   //OOP to initialise an class
        this.data = data;
        this.left = left;
        this.right = right;
    }
} 

class BST {
    constructor(){                                      //OOP to initialise an class
        this.root = null;                               //1 no previous nodes, empty tree
    }
    add(data) {                                         //recursive function to search where to put new node
        const node = this.root;             //2
        if (node === null){                 //3
            this.root = new Node(data);     //4
            return;
        }else {
            const searchTree = function(node) {         //search where to put data
                if (data < node.data) {                 //if smaller data
                    if (node.left === null) {           //when node.left is empty
                        node.left = new Node(data);         //new left node
                        return;
                    }else if (node.left !== null) {     //loop to push data to the leftest, as smallert, coz if while looping down the tree data is larger, it will create a right node
                        return searchTree(node.left);   //
                    }
                }else if (data > node.data){            //if larger data
                    if (node.right === null) {          //checks for empty right node
                        node.right = new Node(data);        //creates new right node
                        return;
                    }else if (node.right !== null){         //right node have number
                        return searchTree(node.right);
                    }
                }else{
                    return null;
                }
            };
            return searchTree(node)
        }
    }
    findMin(){          //build function to make current go to the smallest number, built from node.left. new nodes for the lefts will be smaller
        let current = this.root;        // below is recursive loop
        while(current.left !== null){ //if have a number it will...
            current = current.left;     //it will make current  as current left.
        }
        return current.data;            //and show the leftest node
    }
    findMax(){                      //function to find the rightest node
        let current = this.root;            
        while(current.right !== null){          // loop for !empty right node 
            current = current.right;            // change current for the rightest
        }
        return current.data;                    // return current.data
    }
    find(data){
        let current = this.root;                //function to find
        while (current.data !== data){          //if not data
            if (data < current.data){               //if integer needed to be find is smaller, check left
                current = current.left;             //data smaller than parent, left will be current
            }else{                                  //else current is right, ie larger data
                current = current.right;            
            }
            if (current === null){              // if data exactly empty
                return null;                    //return null
            }
        }
        return current;                         //return find(data) current
    }
    isPresent(data) {                           //check if data present function
        let current = this.root;                //starts with current at root
        while(current){                         //looping
            if(data === current.data){              //if data is current data 
                return true;                        //return true
            }
            if (data < current.data){               //smaller datas
                current = current.left;             //make left node current
            } else{                                 //ie larger data
                current = current.right;            //make right node current
            }
        }
        return false;                               //not sure maybe if it doesn't run the loops it will return false.
    }   
    remove(data) {                                  // remove data function
        const removeNode = function(node,data){         //initialise const
            if (node == null) {                         //if node empty
                return null;                            //return null
            }
            if (data == node.data){                     //if same value
                // node has no children
                if (node.left == null && node.right == null){       //to check if no children
                    return null;                                    //change data value to null, make it empty
                }
                //node has no left child
                if (node.left == null){                             //if left is empty, post same data
                    return node.right;                              //it will pull right node value to current node that needs to be removed
                }
                // node has no right child
                if (node.right == null) {                           //if right data empty
                    return node.left;                               //it will pull up left child, when parent is to be removed. same as above. just right side
                }
                // node has two children
                var tempNode = node.right;                          //initialise right node as new tempnode for default
                while (tempNode.left !== null) {                    //loop if left isn't empty, have smaller numbers
                    tempNode = tempNode.left;                       //left childrens will be tempNode
                }
                node.data = tempNode.data;                          //not sure
                node.right = removeNode(node.right, tempNode.data); //
                return node;
            } else if (data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data)
    }
}

const bst = new BST();

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));