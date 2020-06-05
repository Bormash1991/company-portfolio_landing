const closeModal = () => {
  const modals = document.querySelectorAll("[data-all-modal]");
  modals.forEach((item) => {
    item.classList.remove("show", "fade");
    item.classList.add("hide");
  });
  document.body.style.overflow = "";
  document.body.style.marginRight = `0px`;
};
export default closeModal;
