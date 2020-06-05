const showModal = (selector, scroll = 0) => {
  const modals = document.querySelectorAll("[data-all-modal]"),
    modal = document.querySelector(selector);
  modals.forEach((item) => {
    item.classList.remove("show", "fade");
    item.classList.add("hide");
  });
  modal.classList.add("show", "fade");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
  document.body.style.marginRight = `${scroll}px`;
};
export default showModal;
