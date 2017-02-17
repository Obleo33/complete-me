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

  locate(string) {
    let suggestStr = string.split('');
    let endNode    = this.root;
    let noMatch    = false;

    suggestStr.forEach(letter => {
      if (endNode.children[letter]){
        return endNode = endNode.children[letter];
      } else {
        noMatch = true;
      }
    });
    return !noMatch? endNode: null;
  }

  suggest(string){
    let endNode = this.locate(string);
    this.suggestList = [];

    if (endNode !== null){
      this.suggestList = this.wordSuggest(endNode,string);

      this.suggestList.sort(( a, b) => {
        return b.pref - a.pref;
      });

      this.suggestList.forEach((wordObj,index) => {
        this.suggestList[index] = wordObj.word;
      });

      return this.suggestList;
    } else {
      return 'none';
    }
  }

  wordSuggest(current,string){
    if (current.isWord){
      this.suggestList.push({word: string, pref: current.pref});
    }

    let keysArr = Object.keys(current.children);

    keysArr.forEach(letter => {
      let nextNode = current.children[letter];
      this.wordSuggest(nextNode,(string + letter));
    });
    return this.suggestList;
  }

  populate() {
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');
    dictionary.forEach((word) => {
      this.insert(word);
    });
  }

  select(word) {
    this.locate(word).pref ++;
  }
}

// checkSuggestions(this.suggestList, string)
// are there any suggestions
   // if there is a key {'piz':{'pizzaria':1 }
   // grab the word and reorder it within suggestLIst
   // else return suggestList


//When you use select move throught the tree and find the end node
//and add a counter to that node


//pass in the suggestion and choose word
// suggest(partialWord, wordToSuggest) {

//when
