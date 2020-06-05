const showMenu = () => {
  const burger = document.querySelector(".burger"),
    menu = document.querySelector(".header .menu"),
    overlay = document.querySelector(".overlay"),
    header = document.querySelector(".header");

  const toggleMenu = () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");

    if (window.getComputedStyle(overlay).display === "none") {
      overlay.style.cssText = `display:block`;
      document.body.style.overflow = "hidden";
    } else {
      overlay.style.cssText = `display:none`;
      document.body.style.overflow = "";
    }
  };
  overlay.addEventListener("click", toggleMenu);
  burger.addEventListener("click", toggleMenu);

  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (
      window.getComputedStyle(header).position == "fixed" &&
      (target.nodeName == "A" ||
        target.parentNode.classList.contains("menu__item"))
    ) {
      toggleMenu();
    }
  });
};
export default showMenu;
