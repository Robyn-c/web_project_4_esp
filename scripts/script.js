// Abrir y cerrar popup
const editPopup = document.querySelector(".edit-popup");
const pageMask = document.querySelector(".page_mask");

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelectorAll(".popup__btn-close");

const addPopup = document.querySelector(".add-popup");
const addButton = document.querySelector(".profile__add-button");

editButton.addEventListener("click", function openEditPopup(e) {
  editPopup.classList.add("popup_opened");
  pageMask.classList.add("page_mask_opened");
});

addButton.addEventListener("click", function openAddButton(e) {
  addPopup.classList.add("popup_opened");
  pageMask.classList.add("page_mask_opened");
});

closeButton.forEach(function closePopup(item) {
  item.addEventListener("click", function () {
    editPopup.classList.remove("popup_opened");
    addPopup.classList.remove("popup_opened");
    imgContainer.classList.remove("popup_opened");
    pageMask.classList.remove("page_mask_opened");
  });
});

function closePopupButton() {
  editPopup.classList.remove("popup_opened");
  addPopup.classList.remove("popup_opened");
  pageMask.classList.remove("page_mask_opened");
}

// Texto en el value del input
const username = document.querySelector(".profile__name");
const userAboutMe = document.querySelector(".profile__about-me");

const nameInput = document.querySelector("#name");
const aboutMeInput = document.querySelector("#about-me");

nameInput.setAttribute("value", username.textContent);
aboutMeInput.setAttribute("value", userAboutMe.textContent);

// Formulario para editar
const editFormElement = document.querySelector("#edit-container");

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
const titleInput = document.querySelector("#title");
const urlInput = document.querySelector("#url");

const addFormElement = document.querySelector("#add-container");

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

// Popup al clickear una imagen'
const imgPopup = document.querySelectorAll(".card__image");
const imgContainer = document.querySelector(".img-popup");
const cardTitle = document.querySelectorAll(".card__title");

let popupSpan = document.querySelector(".popup__span");
/* console.log(cardTitle);
console.log(popupSpan); */
/* imgPopup.forEach((image) => {
  image.addEventListener("click", function (e) {
    imgContainer.classList.add("popup_opened");
    pageMask.classList.add("page_mask_opened");
    document.querySelector(".img-popup__image").src = image.getAttribute("src");
  });
}); */

for (let i = 0; i < imgPopup.length; i++) {
  /*   console.log(imgPopup[i]);
  console.log(cardTitle[i].textContent); */
  console.log(popupSpan.textContent);
  imgPopup[i].addEventListener("click", function (e) {
    popupSpan.textContent = cardTitle[i].textContent;
    imgContainer.classList.add("popup_opened");
    pageMask.classList.add("page_mask_opened");
    document.querySelector(".img-popup__image").src =
      imgPopup[i].getAttribute("src");
  });
}
