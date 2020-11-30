class State {
  _value;
  #renders;

  constructor(initialValue) {
    this._value = initialValue;
    this.#renders = new Set();
  }

  subscribe = render => {
    if (typeof render === 'function') {
      this.#renders.add(render);
    }
  };

  renderAll = () => {
    this.#renders.forEach(render => render());
  };

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
    this.renderAll();
  }
}

export default State;
