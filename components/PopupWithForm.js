import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, submitHandler }) {
    // pass popupSelector to parent class
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._submitHandler = submitHandler;
    this._inputList = this._popupForm.querySelectorAll(".popup__input"); // list of inputs
  }

  _getInputValues() {
    const inputValues = {};

    // add each input field to the values object
    this._inputList.forEach((item) => {
      inputValues[item.name] = item.value;
    });
    return inputValues;
  }

  setEventListeners() {
    // pull functionality of the parent class
    super.setEventListeners();

    // submit new to do element
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._submitHandler(inputValues);
    });
  }
}

export default PopupWithForm;
