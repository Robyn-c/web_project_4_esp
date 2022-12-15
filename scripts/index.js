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
    imgContainer.classList.remove("popup_opened");
    pageMask.classList.remove("page_mask_opened");
    document.removeEventListener("keydown", escapeKeyListener);
  });
});

function closePopupButton() {
  editPopup.classList.remove("popup_opened");
  addPopup.classList.remove("popup_opened");
  pageMask.classList.remove("page_mask_opened");
  imgContainer.classList.remove("popup_opened");
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
  nameValue = nameInput.value;
  jobValue = aboutMeInput.value;

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
  addCard(urlInput.value, titleInput.value);
  closePopupButton();
}

addFormElement.addEventListener("submit", handleAddCardSubmit);

const cardContainer = document.querySelector(".cards");

function addCard(srcValue, titleValue) {
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").setAttribute("alt", titleValue);
  cardElement.querySelector(".card__image").setAttribute("src", srcValue);
  cardElement.querySelector(".card__title").textContent = titleValue;
  cardContainer.append(cardElement);
  heartButton();
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

// Rellenar corazon al hacer click
function heartButton() {
  let toggle = false;
  const heartButton = document.querySelectorAll(".card__heart");
  heartButton.forEach((heart) => {
    heart.addEventListener("click", function handleLikeButton(event) {
      // toggle
      toggle = !toggle;
      if (toggle) {
        heart.src = "/images/like-button-filled.svg";
      } else {
        heart.src = "/images/like-button.svg";
      }
    });
  });
}

// Boton para eliminar tarjetas
const cards = document.querySelectorAll(".card");
const cardRemoveButton = document.querySelectorAll(".card__remove");

cardRemoveButton.forEach((remove) => {
  remove.addEventListener("click", function removeButton(event) {
    remove.parentElement.remove();
  });
});

// Popup al clickear una imagen
const imagesPopup = document.querySelectorAll(".card__image");
const imgContainer = document.querySelector(".img-popup");
const cardTitles = document.querySelectorAll(".card__title");

const popupSpan = document.querySelector(".img-popup__span");

for (let i = 0; i < imagesPopup.length; i++) {
  imagesPopup[i].addEventListener("click", function (e) {
    popupSpan.textContent = cardTitles[i].textContent;
    imgContainer.classList.add("popup_opened");
    pageMask.classList.add("page_mask_opened");
    document.addEventListener("keydown", escapeKeyListener);
    document.querySelector(".img-popup__image").src =
      imagesPopup[i].getAttribute("src");
    document.querySelector(".img-popup__image").alt = popupSpan.textContent;
  });
}
