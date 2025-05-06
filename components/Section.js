class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  // renders elements on a page
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // add single to do item to the page
  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
