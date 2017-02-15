import Node from './node'

export default class Trie{
  constructor() {
    this.root = null;
    this.count = 0;
  }

  insert(word){
    let wordArr = word.split('');
    let current = this.root;

    wordArr.forEach((letter, index) => {
      //if the root is null create a new node with the
      //first letter
      if(index === 0){
        if (this.root === null){
          console.log('New Node', letter)
          let node = new Node(letter);
          current = node;
          this.root = node;
          return current = node;
        }
        //if the root node has the first letter then return
        //and move on to the next letter
        else if (current.data[letter]){
          // console.log('first letter exists', letter)
          return current = this.root;
        }
        //if the root node exists and dosent contain the
        //letter add it
        else {
          // console.log('first letter add', letter)
          this.root.data[letter] = letter;
          return current = this.root;
        }
      } else {

        //if this node dosent contain this letter then add
        //to the node or create node if one dosent exist

        if (current.children === null){
          // console.log('new child node', letter)
          let node = new Node(letter);
          current.children = node;
          return current = current.children;
        } else if(current.children.data[letter]){
          // console.log('child contains next letter', letter)
          return current = current.children
        } else {
          // console.log('add letter to child node', letter)
          current.children.data[letter] = letter;
          return current = current.children
        }
      }
    })
  }
}
