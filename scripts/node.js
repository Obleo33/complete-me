export default class Node {
  constructor(letter) {
    this.isWord = false
    this.data = {[letter]:letter};
    this.children = null;
  }
}
