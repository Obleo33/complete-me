import Node from './node';
import fs from 'fs';

const text     = '/usr/share/dict/words';

export default class Trie{
  constructor() {
    this.root        = new Node();
    this.count       = 0;
    this.suggestList = [];
  }

  insert(word){
    let wordArr = word.split('');
    let current = this.root;

    wordArr.forEach((letter) => {
      if (current.children[letter]){
        return current = current.children[letter];
      } else {
        current.children[letter] = new Node(letter);
        return current = current.children[letter];
      }
    });
    current.isWord = true;
    current.value  = word;
    this.count ++;
    // console.log(JSON.stringify(this, null, 4))
  }

  suggest(string){
    this.suggestList = [];
    let suggestStr = string.split('');
    let current    = this.root;
    let noMatch    = false;

    suggestStr.forEach(letter => {
      if (current.children[letter]){
        return current = current.children[letter];
      } else {
        noMatch = true;
      }
    });
    return !noMatch?
            this.wordSuggest(current,string):
            'none';
  }

  wordSuggest(current,string){
    if (current.isWord){
      this.suggestList.push(string);
    }

    let keysArr = Object.keys(current.children);

    keysArr.forEach(letter => {
      let nextNode = current.children[letter];
      this.wordSuggest(nextNode,(string + letter));
    });
    // checkSuggestions(this.suggestList, string)
    // are there any suggestions
       // if there is a key {'piz':{'pizzaria':1 }
       // grab the word and reorder it within suggestLIst
       // else return suggestList
    return this.suggestList;
  }

  populate() {
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    dictionary.forEach((word) => {
      this.insert(word);
    });
  }
}

//When you use select move throught the tree and find the end node
//and add a counter to that node


//pass in the suggestion and choose word
// suggest(partialWord, wordToSuggest) {

//when
