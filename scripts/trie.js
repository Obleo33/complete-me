import Node from './node'

export default class Trie{
  constructor() {
    this.root = {};
    this.count = 0;
  }

  insert(word){
    let wordArr = word.split('');
    let current = null;

    wordArr.forEach((letter, index) => {
      if(index === 0){
        if (this.root[letter]){
          return current = this.root[letter];
        } else {
          current = this.root[letter] = new Node(letter);
          return current = this.root[letter];
        }
      }

      if (current.children[letter]){
        return current = current.children[letter];
      } else {
        current.children[letter] = new Node(letter);
        return current = current.children[letter]
      }
    })
    current.isWord = true;
  }
}
