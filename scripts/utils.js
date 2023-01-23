import { Card } from "./Card.js";

// Abrir y cerrar popup
const editPopup = document.querySelector(".edit-popup");

// Funcion para cerrar al hacer click afuera del popup
const pageMask = document.querySelector(".page-mask");
pageMask.addEventListener("click", closePopupButton);

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelectorAll(".btn_close");

const addPopup = document.querySelector(".add-popup");
const addButton = document.querySelector(".profile__add-button");

function escapeKeyListener(evt) {
  if (evt.key === "Escape") {
    closePopupButton();
  }
}

editButton.addEventListener("click", function openEditPopup(e) {
  editPopup.classList.add("popup_opened");
  pageMask.classList.add("page_mask_opened");
  document.addEventListener("keydown", escapeKeyListener);
});

addButton.addEventListener("click", function openAddButton(e) {
  addPopup.classList.add("popup_opened");
  pageMask.classList.add("page_mask_opened");
  document.addEventListener("keydown", escapeKeyListener);
});

closeButton.forEach(function closePopup(item) {
  item.addEventListener("click", function () {
    editPopup.classList.remove("popup_opened");
    addPopup.classList.remove("popup_opened");
    document.querySelector(".img-popup").classList.remove("popup_opened");
    pageMask.classList.remove("page_mask_opened");
    document.removeEventListener("keydown", escapeKeyListener);
  });
});

function closePopupButton() {
  editPopup.classList.remove("popup_opened");
  addPopup.classList.remove("popup_opened");
  pageMask.classList.remove("page_mask_opened");
  document.querySelector(".img-popup").classList.remove("popup_opened");
  document.removeEventListener("keydown", escapeKeyListener);
}

// Texto en el value del input
const username = document.querySelector(".profile__name");
const userAboutMe = document.querySelector(".profile__about-me");

const nameInput = document.querySelector("#name-input");
const aboutMeInput = document.querySelector("#aboutme-input");
/*
nameInput.setAttribute("value", username.textContent);
aboutMeInput.setAttribute("value", userAboutMe.textContent); */

// Formulario para editar
const editFormElement = document.querySelector(".edit-popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  let nameValue = nameInput.value;
  let jobValue = aboutMeInput.value;

  // Selecciona los elementos donde se introducirán los valores de los campos
  username.textContent = nameValue;
  userAboutMe.textContent = jobValue;

  closePopupButton();
}

editFormElement.addEventListener("submit", handleProfileFormSubmit);

// Formulario para añadir
const titleInput = document.querySelector("#title-input");
const urlInput = document.querySelector("#url-input");

const addFormElement = document.querySelector(".add-popup__container");

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const card = new Card(titleInput.value, urlInput.value);
  const cardElement = card.generateCard();
  document.querySelector(".cards").prepend(cardElement);
  // addCard(urlInput.value, titleInput.value);
  closePopupButton();
}

addFormElement.addEventListener("submit", handleAddCardSubmit);
