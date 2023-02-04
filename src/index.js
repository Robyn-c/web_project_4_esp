import {
  initialCards,
  selectors,
  editForm,
  formsElements,
  updateUserInfo,
  handleEditSubmit,
  handleAddCardSubmit,
} from "./scripts/utils.js";
import Card from "./scripts/Card.js";
import Popup from "./scripts/Popup.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import FormValidator from "./scripts/FormValidator.js";
import previewPopup from "./scripts/PopupWithImage.js";
// index.js

import "./index.css";

export const addCardPopup = new Popup("#popup_add_card");

export const editPopup = new PopupWithForm(
  "#popup_edit_profile",
  updateUserInfo
);

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector(".cards").append(cardElement);
});

formsElements.forEach((form) => {
  const formValidator = new FormValidator(form, selectors);
  formValidator.enableValidation();
});

// abrir formulario agregar tarjeta
const addCardButton = document.querySelector(".profile__add-button");
addCardButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  addCardPopup.open();
});

// abrir formulario editar perfil
const editButton = document.querySelector(".profile__edit-button");
editButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  editPopup.open();
});

const closeAddCardButton =
  addCardPopup._popupElement.querySelector(".btn_close");
closeAddCardButton.addEventListener("click", () => addCardPopup.close());

const closeEditProfile = editPopup._popupElement.querySelector(".btn_close");
closeEditProfile.addEventListener("click", () => editPopup.close());

addCardPopup.setEventListeners();
editPopup.setEventListeners();
previewPopup.setEventListeners();

const addFormCard = document.querySelector(".add-popup__container");
editForm.addEventListener("submit", handleEditSubmit);
addFormCard.addEventListener("submit", () => {
  handleAddCardSubmit();
});
