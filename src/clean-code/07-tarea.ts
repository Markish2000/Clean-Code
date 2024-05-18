(() => {
  type HtmlType = 'input' | 'select' | 'textarea' | 'radio';

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  class InputElement {
    public attributes: InputAttributes;
    public events: InputEvents;
    public html: HtmlElement;

    constructor(value: string, placeholder: string, id: string) {
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
      this.html = new HtmlElement(id, 'input');
    }
  }

  const nameField = new InputElement('Marcos', 'Enter first name', 'txtName');

  console.log({ nameField });
})();
