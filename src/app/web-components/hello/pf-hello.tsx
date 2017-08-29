import { h, Component, props } from 'skatejs';
import { scopeCss } from '../../../@skatejs/grip-tape';
import styles from './pf-hello.css';

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

  css = scopeCss(this, styles);

  connectedCallback() {
    super.connectedCallback();
  }

  renderCallback({ name }: Props) {
    return (
      <div>
        <style>{this.css}</style>
        Hello, <b>{name}</b>
      </div>
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

export { HelloWebComponent };
