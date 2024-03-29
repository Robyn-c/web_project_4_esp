//CARD : crea 1 tarjeta con texto y un enlace de imagen

import { popupImage, popupDelete } from "../utils/constants.js";

import PopupWithImage from "./PopupWithImage.js";

export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    popupDeleteConfirm,
    handleLike
  ) {
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._me = data.me;
    this._owner = data.owner;
    this._handleCardClick = handleCardClick.bind(this);
    this._popupDeleteConfirm = popupDeleteConfirm;
    this._likes = data.likes;
    this.handleLike = this.handleLike.bind(this);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  handleLike() {
    const LikesUser = this._likes.filter((user) => user._id === this._me.id);
    if (LikesUser.length > 0) {
      api.deleteCardLike(this._id).then((data) => {
        this._likes = data.likes;
        this._likeCounter = data.likes.length;
        this._element.querySelector(".card__like-counter").textContent =
          data.likes.length;
      });
    } else {
      api.addCardLike(this._id).then((data) => {
        this._likes = data.likes;
        this._likeCounter = data.likes.length;
        this._element.querySelector(".card__like-counter").textContent =
          data.likes.length;
      });
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners(); // añade los controladores de eventos

    this._element.querySelector(".card__card-title").textContent = this._name;
    this._element.querySelector(".card__img-card").src = this._link;
    this._element.querySelector(".card__like-counter").textContent =
      this._likes.length;

    if (this._owner._id !== this._me.id) {
      this._element.querySelector(".card__delete-button").style.display =
        "none";
    }

    const LikesUser = this._likes.filter((user) => user._id === this._me.id);
    if (LikesUser.length > 0) {
      const likeButton = this._element.querySelector(".card__card-like");
      likeButton.classList.toggle("card__card-like_active");
    }

    return this._element;
  }

  getCardId() {
    return this._id;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__img-card")
      .addEventListener("click", this._handleCardClick);

    this._element
      .querySelector(".card__card-like")
      .addEventListener("click", () => {
        this._toggleLikeButton();
      });

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        popupDelete.querySelector('.popup__input-popup[name="card_id"]').value =
          this._id;
        this._popupDeleteConfirm.open();
      });

    this._element
      .querySelector(".card__card-like")
      .addEventListener("click", this._handleLike);
  }

  //abrir modal
  openPopup() {
    const popup = new PopupWithImage(popupImage);
    popup.open(this._name, this._link);
  }

  _toggleLikeButton() {
    // VARIABLE: LIKE BUTTON
    const likeButton = this._element.querySelector(".card__card-like");
    likeButton.classList.toggle("card__card-like_active"); // escucha al botón LIKE
  }

  _deleteCard() {
    ///VARIABLE: DELETE BUTTON
    const deleteButton = this._element.querySelector(".card__delete-button");

    deleteButton.closest(".card").remove();
  }
}
