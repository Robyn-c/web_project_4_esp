// Abrir y cerrar popup
const popup = document.querySelector(".popup");
const pageMask = document.querySelector(".page_mask");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__btn-close");

function openPopup(e) {
  popup.classList.add("popup_opened");
  pageMask.classList.add("page_mask_opened");
}

function closePopup(e) {
  popup.classList.remove("popup_opened");
  pageMask.classList.remove("page_mask_opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

// Texto en el value del input
const username = document.querySelector(".profile__name");
const userAboutMe = document.querySelector(".profile__about-me");

const nameInput = document.querySelector("#name");
const aboutMeInput = document.querySelector("#about-me");

nameInput.setAttribute("value", username.textContent);
aboutMeInput.setAttribute("value", userAboutMe.textContent);

// Formulario
const formElement = document.querySelector(".popup__container");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  nameValue = nameInput.value;
  jobValue = aboutMeInput.value;

  // Selecciona los elementos donde se introducirán los valores de los campos
  username.textContent = nameValue;
  userAboutMe.textContent = jobValue;
  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);

const cardContainer = document.querySelector(".cards");

function addCard(srcValue, titleValue) {
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").setAttribute("src", srcValue);
  cardElement.querySelector(".card__title").textContent = titleValue;
  cardContainer.append(cardElement);
}

const initialCards = [
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
initialCards.forEach((card) => addCard(card.link, card.name));
console.log(initialCards);

// Rellenar corazon al hacer click
const heartButton = document.querySelectorAll(".card__heart");

heartButton.forEach((heart) => {
  heart.addEventListener("click", function handleLikeButton(event) {
    heart.classList.toggle("card__heart_liked");
  });
});

// Boton para eliminar tarjetas
const cards = document.querySelectorAll(".card");
const cardRemoveButton = document.querySelectorAll(".card__remove");

cardRemoveButton.forEach((remove) => {
  remove.addEventListener("click", function removeButton(event) {
    remove.parentElement.remove();
  });
});
