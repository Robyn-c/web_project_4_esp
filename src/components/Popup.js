export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscCloseBind = this._handleEscClose.bind(this);
    this.setEventListeners();
  }

  open() {
    this._popupSelector.classList.add("popup-container_show"); //cambiar CSS de MODAL con class "popup-container_show"
    document.addEventListener("keydown", this._handleEscCloseBind); //escuche a CERRAR MODAL (LAS 3)
  }

  close() {
    this._popupSelector.classList.remove("popup-container_show");
    document.removeEventListener("keydown", this._handleEscCloseBind);
  }

  //cerrar el popup al pulsar la tecla Esc
  _handleEscClose(event) {
    if (event.key === "esc" || event.key === "Escape") {
      this.close();
    }
  }

  //detector de eventos de clic en X / clic AFUERA
  setEventListeners() {
    this._popupSelector.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("popup-container_show")) {
        this.close();
      }
      if (evt.target.classList.contains("popup-container__close-popup")) {
        this.close();
      }
    });
  }
}
