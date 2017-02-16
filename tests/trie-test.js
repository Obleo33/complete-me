import { expect } from 'chai';
import Trie from '../scripts/trie';
import Node from '../scripts/node'

describe('testing Trie functionality',()=>{
  let trie;

  beforeEach(() => {
    trie = new Trie();
  });

  it('should have a root node', () => {
    expect(trie.root).to.be.an.instanceof(Node)
  })

  it('should have an insert function', () => {
    expect(trie.insert('')).to.be.function
  })

  describe('testing insert functionality',()=>{
    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it('should create a node for the letter passed in as a child of root', () => {
      trie.insert('b');

      expect(trie.root.children).to.have.property('b');
    })

    it('should not create a new node if the node already exists as a child of the root',() => {
      trie.insert('b');
      trie.insert('b');

      expect(trie.root.children).to.deep.equal({ b:{ isWord: true, data: 'b', children: {}, value: 'b'}})
    })

    it('should add a child node to the prevous letter for each letter in a word', () => {
      trie.insert('be');

      expect(trie.root.children).to.have.property('b')
                                .to.have.property('children')
                                .to.have.property('e')
    })

    it('should not create a new child node of a letter if it previously exists', () => {
      trie.insert('be');
      trie.insert('be');

      expect(trie.root.children).to.have.property('b')
                                .to.have.property('children')
                                .to.deep.equal({ e:{ isWord: true, data: 'e', children: {}, value: 'be'}})
    })

    it('should create a new child node for a letter that is shared', () => {
      trie.insert('be');
      trie.insert('bo');

      expect(trie.root.children).to.have.property('b')
                                .to.have.property('children')
                                .to.have.keys('e','o');
    })

    it('should mark isWord as true at the end of the word input', () => {
      trie.insert('be');

      expect(trie.root.children).to.have.property('b')
                                .to.have.property('children')
                                .to.have.property('e')
                                .to.have.property('isWord')
                                .to.be.true;
    })

    it('should incriment the count after a word has been inserted', () => {
      expect(trie.count).to.equal(0)

      trie.insert('be');
      expect(trie.count).to.equal(1)

      trie.insert('bo');
      expect(trie.count).to.equal(2)
    })
  });

  describe('testing suggest functionality',()=>{

    let trie;

    beforeEach(() => {
      trie = new Trie();
    });

    it('should return the input word as a suggestion if it is a word', () => {
      trie.insert('be');

      expect(trie.suggest('be')).to.deep.equal(['be'])
    })

    it('should return none if there are no suggestions', () => {
      trie.insert('be');

      expect(trie.suggest('tot')).to.equal('none')
    })


    it('should take a string and suggest all complete words beginning with the string', () => {
      trie.insert('be');
      trie.insert('better');
      trie.insert('bear');
      trie.insert('and');
      trie.insert('can')
      trie.insert('boat')

      expect(trie.suggest('be')).to.deep.equal(['be','better','bear'])
    })
  });


  describe('testing populate functionaity', () => {
    beforeEach(() => {
      trie.populate();
    });

    it.only('should add all the words in the dictionary', () => {
      expect(trie.count).to.equal(235886)
    }),

    it('should suggest real words', () => {
      expect(trie.suggest('burri')).to.deep.equal(['burring','burrish','burrito'])
    })

    it('should return none if there are no real words', () => {
      expect(trie.suggest('fartaxi')).to.equal('none');
    })
  });
});
