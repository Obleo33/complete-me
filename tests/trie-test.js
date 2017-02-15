import { expect } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/node'

describe('testing Trie functionality',()=>{

  it('should log shit', () => {
    let trie = new Trie();
    console.log
    trie.insert('apple');
    trie.insert('tree');
    trie.insert('tbd');
    trie.insert('tba');

    console.log(JSON.stringify(trie, null, 4))

    expect(trie.root.data).to.equal('a')
  })


});
