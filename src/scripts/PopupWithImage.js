import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ title, image }) {
    this._popupElement.querySelector(".img-popup__image").src = image;
    this._popupElement.querySelector(".img-popup__span").textContent = title;
    this._popupElement
      .querySelector(".img-popup__image")
      .setAttribute("alt", title);
    super.open();
  }

  close() {
    super.close();
  }
}

const previewPopup = new PopupWithImage(".img-popup");

export default previewPopup;
