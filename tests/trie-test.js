import { expect } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/node'

describe('testing Trie functionality',()=>{

  it

  it('should add a letter to the child node', ()=>{
    let trie = new Trie();
  })

  it('should log shit', () => {
    let trie = new Trie();
    trie.insert('bear');
    trie.insert('bet');
    trie.insert('better');
    trie.insert('be');

    trie.suggest('be');
    console.log(trie.suggestList)

    expect(trie.root).to.equal({a,t})
  })


});
