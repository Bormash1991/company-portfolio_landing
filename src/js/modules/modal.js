import closeModal from "./closeModal";
const modal = () => {
  const close = document.querySelectorAll("[data-close]");
  close.forEach((item) => {
    item.addEventListener("click", closeModal);
  });
};
export default modal;
