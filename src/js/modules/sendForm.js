import Service from "./service";
import checkWidth from "./modals_checkWidth";
import showModal from "./showModal";
import closeModal from "./closeModal";
const sendForm = () => {
  const service = new Service(),
    forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    content = document.querySelector(".modal__title"),
    scroll = checkWidth();

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  let message = {
    loading: "img/form/original.svg",
    sucsess: "Спасибо! Скоро с вами свяжутся",
    failure: "Что-то пошло не так...",
  };

  const showThanksModal = (message) => {
    showModal(".modal", scroll);
    content.textContent = message;
    setTimeout(() => {
      content.textContent = "";
      closeModal();
    }, 5000);
  };
  const showSpinner = (message) => {
    showModal(".modal", scroll);
    content.innerHTML = `
      <img src='${message}' alt="loading" style="display: block; margin: 0 auto;"></img>
  `;
  };
  forms.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(item);
      const formObj = {};
      for (let [key, value] of formData.entries()) {
        formObj[key] = value;
      }
      showSpinner(message.loading);
      let postData;
      if (item.getAttribute("data-form") == "email") {
        postData = service.sendEmail;
      } else {
        postData = service.sendForms;
      }

      postData(JSON.stringify(formObj))
        .then(() => {
          showThanksModal(message.sucsess);
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          clearInputs();
        });
    });
  });
};
export default sendForm;
