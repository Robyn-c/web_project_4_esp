import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

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

// Card Creation
initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();
  document.querySelector(".cards").prepend(cardElement);
});

// Form Validation
const config = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inputErrorClass: "form__input_type_error",
  errorActiveClass: "form__input-error_active",
  inactiveButtonClass: "button_inactive",
};

const forms = document.querySelectorAll(".form");
forms.forEach((form) => {
  const formValidator = new FormValidator(config, form);
  formValidator.enableValidation();
});
