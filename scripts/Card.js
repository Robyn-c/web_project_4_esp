export class Card {
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
    const cardRemoveButton = this._element.querySelector(".card__remove");
    cardRemoveButton.addEventListener("click", () => {
      this._element.remove();
    });

    const cardLikeButton = this._element.querySelector(".card__heart");
    let toggle = false;
    cardLikeButton.addEventListener("click", () => {
      toggle = !toggle;
      if (toggle) {
        cardLikeButton.src = "/images/like-button-filled.svg";
      } else {
        cardLikeButton.src = "/images/like-button.svg";
      }
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        document.querySelector(".img-popup__span").textContent =
          this._element.querySelector(".card__title").textContent;
        document.querySelector(".img-popup").classList.add("popup_opened");
        document.querySelector(".page-mask").classList.add("page_mask_opened");
        document.addEventListener("keydown", function escapeKeyListener(evt) {
          if (evt.key === "Escape") {
            closePopupButton();
          }
        });
        document.querySelector(".img-popup__image").src = this._element
          .querySelector(".card__image")
          .getAttribute("src");
        document.querySelector(".img-popup__image").alt =
          document.querySelector(".img-popup__span").textContent;
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".card__title").textContent = this._title;
    this._element.querySelector(".card__image").src = this._image;

    return this._element;
  }
}
