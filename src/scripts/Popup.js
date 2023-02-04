export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.querySelector(".page-mask").classList.add("page_mask_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    document.querySelector(".page-mask").classList.remove("page_mask_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    document.querySelector(".page-mask").addEventListener("click", () => {
      this.close();
    });

    document.querySelectorAll(".popup__btn-close").forEach((item) => {
      item.addEventListener("click", () => {
        this.close();
      });
    });
  }
}
