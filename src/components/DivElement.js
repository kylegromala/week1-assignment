// Import HTMLElement here
import { default as HTMLElement } from './HTMLElement.js';

// Define class here
class DivElement extends HTMLElement {
    constructor(content) {
        super(content);
    };

    render() {
        console.log()
    }
}

const UofW = new DivElement('University of Washington');
UofW.render();

// Export class here

export default class { DivElement };
