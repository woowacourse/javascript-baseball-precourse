class UserInput {
  #$target;
  #props;
  #$userInput;

  constructor($target, props) {
    this.#$target = $target;
    this.#props = props;
    this.#$userInput = $target.querySelector('#user-input');
    this.initializeEventListener();
  }

  initializeEventListener() {
    this.#$target.addEventListener('submit', (event) => this.onSubmit(event));
  }

  onSubmit(event) {
    const userNumber = parseInt(this.#$userInput.value, 10);
    this.#props.userNumber.value = userNumber;
    event.preventDefault();
  }

  clearInput = () => {
    this.#$userInput.value = '';
  };
}

export default UserInput;
