export default class Node {
  constructor(data) {
    this.isWord = false
    this.data = data;
    this.children = {};
  }
}
