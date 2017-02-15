import { expect } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/node'

describe('testing Trie functionality',()=>{

  it('should log shit', () => {
    let trie = new Trie();
    trie.insert('bob');
    trie.insert('apple');
      console.log(JSON.stringify(trie, null, 4))

    expect(trie.root.data).to.equal('a')
  })


});
