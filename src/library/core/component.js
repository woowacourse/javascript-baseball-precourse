class Component {
  _$target;
  _props;

  constructor($target, props) {
    this._$target = $target;
    this._props = props;
    this.initializeEventListener();
  }

  initializeEventListener() {}

  render() {}
}

export default Component;
