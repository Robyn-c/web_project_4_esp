import Popup from "./Popup.js";
import { configFormSelector } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  //recopila datos de todos los campos de entrada
  _getInputValues() {
    this._inputList = this._popupSelector.querySelectorAll(
      configFormSelector.inputSelector
    ); // 1.Obtiene los elementos de todos los campos
    const formValues = {}; // 2.Crea un objeto vacío

    // 3.Agrega los valores de los campos a este objeto
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues; // 4.Devuelve el objeto values
  }

  //agregar al formulario un controlador de eventos submit
  //el detector de eventos click para el icono cerrar.
  setEventListeners() {
    super.setEventListeners();
    this._popupSelector
      .querySelector("form")
      .addEventListener("submit", (event) => {
        event.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
      });
  }

  //reiniciar el formulario cuando se ha cerrado el popup.
  close() {
    super.close();
    this._popupSelector.querySelector("form").reset();
  }
}
