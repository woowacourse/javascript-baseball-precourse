export default class Component {
  constructor(props = {}, handlers = {}) {
    this.container = null;
    this.props = props;
    this.handlers = handlers;
    this.state = {};
    this.childrens = [];
    this.init();
  }

  init() {
    this.initState();
    this.initChildrens();
    this.initDoms();
    this.bindEvents();
  }

  // 컴포넌트 내부의 state를 초기화 한다.
  initState() {}

  // 컴포넌트의 자식 컴포넌트 배열을 초기화한다.
  initChildrens() {}

  // 컴포넌트의 DOM 요소를 초기화 한다.
  initDoms() {}

  // 컴포넌트내의 이벤트를 초기화 한다.
  bindEvents() {}

  // 컴포넌트 상태 및 props 에 따라서 뷰를 렌더링 해주는 함수
  render() {}

  appendRootEvent(type, handler) {
    this.container.addEventListener(type, handler);
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.updateComponent();
  }

  setProps(nextProps) {
    this.props = nextProps;
    this.render();
  }

  updateComponent() {
    this.render();
    this.childrens.forEach(component => component.setProps(this.state));
  }
}
