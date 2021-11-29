export default class Dom {
  constructor() {
    this.resultArea = document.getElementById("result");
  }

  clearResultArea() {
    this.resultArea.innerText = "";
  }

  createNodeParentChild(parentTag, childTag, childText) {
    const parent = document.createElement(parentTag);
    const element = document.createElement(childTag);
    element.innerText = childText;
    parent.append(element);
    return parent;
  }

  createButton(text, id) {
    const button = document.createElement("button");
    button.innerText = text;
    button.id = id;
    return button;
  }

  renderResultText(text) {
    this.resultArea.innerText = text;
  }
}
