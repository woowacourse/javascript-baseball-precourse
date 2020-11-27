import State from './state.js';

class ComputedState extends State {
  #computeFunction;

  constructor(computeFunction, dependancies) {
    super(computeFunction());
    this.#computeFunction = computeFunction;
    dependancies.forEach((dependancy) => dependancy.subscribe(this.handler));
  }

  handler = () => {
    this._value = this.#computeFunction();
    this.renderAll();
  };

  get value() {
    return this._value;
  }
}

export default ComputedState;
