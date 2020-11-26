export default function Utils() {
  this.generateRandomNumbers = (N) => {
    let numbers = [];
    while (numbers.length < N) {
      let r = Math.floor(Math.random() * 9) + 1;
      if (numbers.indexOf(r) == -1) {
        numbers.push(r);
      }
    }
    return numbers.join('');
  };

  this.createBtn = (id, textContent) => {
    let button = document.createElement('button');
    button.id = id;
    button.textContent = textContent;
    return button;
  };
}
