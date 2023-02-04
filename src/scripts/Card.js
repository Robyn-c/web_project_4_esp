import previewPopup from "./PopupWithImage.js";
import heartEmpty from "../images/like-button-filled.svg";
import heartFilled from "../images/like-button.svg";

export default class Card {
  constructor(title, image) {
    this._title = title;
    this._image = image;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card")
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    const cardLikeButton = this._element.querySelector(".card__heart");
    let toggle = false;
    cardLikeButton.addEventListener("click", () => {
      toggle = !toggle;
      if (toggle) {
        cardLikeButton.src = heartFilled;
      } else {
        cardLikeButton.src = heartEmpty;
      }
    });

    const cardRemoveButton = this._element.querySelector(".card__remove");
    cardRemoveButton.addEventListener("click", () => {
      this._element.remove();
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", (evt) => {
        previewPopup.open({
          title: evt.target.alt,
          image: evt.target.src,
        });
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__image").src = this._image;
    this._element.querySelector(".card__image").alt = this._title;
    return this._element;
  }
}
