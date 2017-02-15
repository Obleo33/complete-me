export default class Node {
  constructor(letter) {
    this.isWord = false
    this.data = letter
    this.children = {};
  }
}
