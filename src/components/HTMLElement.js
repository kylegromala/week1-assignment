// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  };

  render = () => {
      const helloQuote = new HTMLElement('p', 'Hello');
    return HTMLElement(' ');
    console.log(helloQuote.render())
  };
};

// Export class here
export default class { HTMLElement };
