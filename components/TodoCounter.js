class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(selector);
    this._completed = todos.filter((item) => item.completed).length;
    this._total = todos.length;
    this._updateText();
  }

  // call when checkbox is clicked & completed to-do is deleted
  updateCompleted = (increment) => {
    // if checked = true, increase completed by 1, else decrease by 1
    this._completed += increment ? 1 : -1;
    this._updateText();
  };

  // call when to-do is deleted or when to-do is created
  updateTotal = (increment) => {
    this._total += increment ? 1 : -1;
    this._updateText();
  };

  // call to update the text content
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
