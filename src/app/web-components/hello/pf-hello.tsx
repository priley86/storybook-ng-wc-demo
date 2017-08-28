import * as skate from 'skatejs';

/**
 * PfHello Web Component for Patternfly Web Components
 */
class PfHelloWebComponent extends skate.Component {
  static get props() {
    return {
      name: { attribute: true }
    };
  }
  renderCallback() {
    return skate.h('div', `Hello, ${this.name}`);
  }
}

customElements.define('pf-hello', PfHelloWebComponent);
export default PfHelloWebComponent;
