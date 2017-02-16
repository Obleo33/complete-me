import { expect } from 'chai';
import Node from '../scripts/node'

describe('testing Node functionality',()=>{

  it('should take a letter as an argument', () => {
    let node = new Node('a');

    expect(node.data).to.equal('a');
  })

  it('should have an isWord property which instantiates as false', () => {
    let node = new Node('a');

    expect(node.isWord).to.be.false
  })

  it('should have a children object', () => {
    let node = new Node('a');

    expect(node.children).to.be.Object;
  })
});
