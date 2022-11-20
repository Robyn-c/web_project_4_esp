// Abrir y cerrar popup
let popup = document.querySelector(".popup");
let pageMask = document.querySelector(".page-mask");

let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__btn-close");

function openPopup(e) {
  popup.classList.add("popup_opened");
  pageMask.classList.add("page-mask_opened");
}

function closePopup(e) {
  popup.classList.remove("popup_opened");
  pageMask.classList.remove("page-mask_opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

// Texto en el value del input
let username = document.querySelector(".profile__name");
let userAboutMe = document.querySelector(".profile__about-me");

let fullName = document.querySelector("#name");
let aboutMe = document.querySelector("#about-me");

fullName.setAttribute("value", username.textContent);
aboutMe.setAttribute("value", userAboutMe.textContent);

console.log(username.textContent);
console.log(userAboutMe.textContent);

// Formulario
let formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Busquemos los campos del formulario en el DOM
  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#about-me");

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  nameValue = nameInput.value;
  jobValue = jobInput.value;

  // Selecciona los elementos donde se introducirán los valores de los campos
  username.textContent = nameValue;
  userAboutMe.textContent = jobValue;
  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
