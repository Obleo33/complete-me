import Node from './node'

export default class Trie{
  constructor() {
    this.root = new Node();
    this.count = 0;
    this.suggestList = [];
  }

  insert(word){
    let wordArr = word.split('');
    let current = this.root

    wordArr.forEach((letter, index) => {
      if (current.children[letter]){
        return current = current.children[letter];
      } else {
        current.children[letter] = new Node(letter);
        return current = current.children[letter]
      }
    })
    current.isWord = true;
    current.value = word;
    this.count ++;
  }

  suggest(string){
    let suggestStr = string.split('');
    let current = this.root;

    suggestStr.forEach(letter => {
      if (current.children[letter]){
        return current = current.children[letter];
      }
    })

    this.wordSuggest(current,string);
  }

  wordSuggest(current,string){
    if (current.isWord){
      this.suggestList.push(string);
    }

    let keysArr = Object.keys(current.children)

    keysArr.forEach(letter => {
      let nextNode = current.children[letter];
      this.wordSuggest(nextNode,(string + letter));
    })

  }
}
