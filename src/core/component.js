export default class Component {
  constructor(container, props, handlers) {
    this.container = container;
    this.props = props;
    this.handlers = handlers;
    this.state = {};
    this.childrens = [];
    this.init();
    this.initChildrens();
    this.initDoms();
    this.bindEvent();
  }

  /**
   *  컴포넌트 state 초기화 함수
   */
  init() {}

  initChildrens() {}

  initDoms() {}

  /**
   * 컴포넌트 내 이벤트 생성 함수
   */
  bindEvent() {}

  /**
   * 컴포넌트 상태 및 props 에 따라서 뷰를 렌더링 해주는 함수
   */
  render() {}

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

  appendRootEvent(eventType, eventHandler) {
    this.container.addEventListener(eventType, eventHandler);
  }
}
