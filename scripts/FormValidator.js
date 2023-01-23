export class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
    this._inputs = form.querySelectorAll(config.inputSelector);
    this._submitButton = form.querySelector(config.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorActiveClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorActiveClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return [...this._inputs].some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
    } else {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._form.addEventListener("input", (event) => {
      const input = event.target;
      this._checkInputValidity(input);
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
