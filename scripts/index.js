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
  const card = new Card(titleInput.value, urlInput.value);
  const cardElement = card.generateCard();
  document.querySelector(".cards").prepend(cardElement);
  // addCard(urlInput.value, titleInput.value);
  closePopupButton();
}

document
  .querySelector(".add-popup__btn-save")
  .addEventListener("click", handleAddCardSubmit);

// const cardContainer = document.querySelector(".cards");

/* function addCard(srcValue, titleValue) {
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").setAttribute("alt", titleValue);
  cardElement.querySelector(".card__image").setAttribute("src", srcValue);
  cardElement.querySelector(".card__title").textContent = titleValue;
  cardContainer.prepend(cardElement);
  heartButton();
  addTrashButton();
  addImagePopup();
} */

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

// initialCards.forEach((card) => addCard(card.link, card.name));

class Card {
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
        this._element.querySelector(".card__heart").src =
          "/images/like-button-filled.svg";
      } else {
        this._element.querySelector(".card__heart").src =
          "/images/like-button.svg";
      }
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        document.querySelector(".img-popup__span").textContent =
          this._element.querySelector(".card__title").textContent;
        document.querySelector(".img-popup").classList.add("popup_opened");
        pageMask.classList.add("page_mask_opened");
        document.addEventListener("keydown", escapeKeyListener);
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

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector(".cards").append(cardElement);
});

// Rellenar corazon al hacer click
/* function heartButton() {
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
} */

// Boton para eliminar tarjetas
/* function addTrashButton() {
  const cardRemoveButton = document.querySelectorAll(".card__remove");
  cardRemoveButton.forEach((remove) => {
    remove.addEventListener("click", function removeButton(event) {
      remove.parentElement.remove();
    });
  });
}
 */
// Popup al clickear una imagen
const imgContainer = document.querySelector(".img-popup");
function addImagePopup() {
  const imagesPopup = document.querySelectorAll(".card__image");
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
}
