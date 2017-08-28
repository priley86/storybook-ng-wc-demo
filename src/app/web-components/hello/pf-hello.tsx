import { h, Component, props } from 'skatejs';
import { prop } from '../skate-decorators';

type Props = {
  name?: string;
};

class HelloWebComponent extends Component<Props> {
  static get is() {
    return 'pf-hello';
  }

  static get props() {
    return {
      name: props.string
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }

  renderCallback() {
    const { name } = this.props;
    return (
      <div>
        Hello, <b>{name}</b>
      </div>
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

export { HelloWebComponent };
