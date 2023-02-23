import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  //añadir 1 imagen al popup y el atributo de imagen src junto con una leyenda
  open(alt, src) {
    super.open();
    const img = this._popupSelector.querySelector("img");
    img.src = src;
    img.alt = alt;

    const parrafo = this._popupSelector.querySelector("p");
    parrafo.textContent = alt;
  }
}
