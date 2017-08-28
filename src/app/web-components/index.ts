import { define } from 'skatejs';
import { HelloWebComponent } from './hello/pf-hello';

/**
 * Use Skate.js to call customElements.define() on our ES6 Classes/Web Components
 * Note: In the future, we'll import these classes externally from a shared dependency...
 */
define(HelloWebComponent);
