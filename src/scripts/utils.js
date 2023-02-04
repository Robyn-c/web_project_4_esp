import Card from "./Card.js";
import { editPopup, addCardPopup } from "../index.js";

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

export const selectors = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inputErrorClass: "form__input_type_error",
  errorActiveClass: "form__input-error_active",
  inactiveButtonClass: "button_inactive",
};

// Variables

export const popUp = document.querySelectorAll(".popup");
export const editForm = document.querySelector(".edit-popup__container");
export const formsElements = document.querySelectorAll(".form");

// Funciones

export function updateUserInfo(inputValues) {
  document.querySelector(".profile__name").textContent = inputValues.name;
  document.querySelector(".profile__about-me").textContent = inputValues.about;
}

export function handleEditSubmit(event) {
  event.preventDefault();
  const inputValues = {
    name: editForm.elements.name.value,
    about: editForm.elements.about.value,
  };
  updateUserInfo(inputValues);
  editPopup.close();
  resetForm(editForm);
}

export function addNewCard(name, link) {
  const newCard = new Card(name, link);
  const cardElement = newCard.generateCard();
  document.querySelector(".cards").prepend(cardElement);
}

export function handleAddCardSubmit() {
  const addFormCard = document.querySelector(".add-popup__container");
  const inputname = addFormCard.querySelector("#title-input").value;
  const inputlink = addFormCard.querySelector("#url-input").value;

  addNewCard(inputname, inputlink);
  addCardPopup.close();
  resetForm(addFormCard);
}

function resetForm(form) {
  form.reset();
}
