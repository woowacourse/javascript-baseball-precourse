export default class Computer {
  constructor(NUMBER_LENGTH) {
    this.NUMBER_LENGTH = NUMBER_LENGTH;
    this.resultArea = document.getElementById("result");
  }

  clearResultArea() {
    this.resultArea.innerText = "";
  }

  makeNumbers() {
    const randomNumbers = new Set();
    while (randomNumbers.size !== this.NUMBER_LENGTH) {
      randomNumbers.add(MissionUtils.Random.pickNumberInRange(1, 9));
    }
    return [...randomNumbers].join("");
  }

  changeStringToNumberArray(string) {
    return [...string].map(value => Number(value));
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
}
