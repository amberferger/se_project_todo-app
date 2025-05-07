import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    // pass popupSelector to parent class
    super({ popupSelector });
  }

  _getInputValues() {}

  //setEventListeners() {}
}

export default PopupWithForm;
