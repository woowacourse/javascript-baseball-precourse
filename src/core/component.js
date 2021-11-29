export default class Component {
  constructor(container, props) {
    this.container = container;
    this.props = props;
    this.state = {};
    this.childrens = [];
    this.init();
    this.initDoms();
    this.bindEvent();
  }

  /**
   * 컴포넌트 초기화 함수
   * state 와 childrens를 초기화한다.
   */
  init() {}

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
    this.state = { ...this.state, nextState };
    this.updateComponent();
  }

  updateComponent() {
    this.childrens.forEach(component => component.updateComponent());
    this.render();
  }

  appendRootEvent(eventType, eventHandler) {
    this.container.addEventListener(eventType, eventHandler);
  }
}
