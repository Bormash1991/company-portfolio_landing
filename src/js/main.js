import slider from "./modules/slider";
import scroll from "./modules/scroll";
import showMenu from "./modules/showMenu";
import sendForm from "./modules/sendForm";
import modal from "./modules/modal";
window.addEventListener("DOMContentLoaded", () => {
  slider(
    ".service__slider-wrapper",
    3,
    true,
    false,
    true,
    ".service__slider-control",
    "service__slider-item_active",
    {
      320: { items: 1, slideBy: 1 },
      576: { items: 3, slideBy: 1 },
      768: {
        items: 3,
        slideBy: 1,
      },
      1024: {
        items: 3,
        slideBy: 1,
      },
    }
  );
  slider(
    ".promo__slider-inner",
    1,
    true,
    false,
    true,
    ".promo__slider-control",
    ""
  );
  showMenu();
  scroll();
  sendForm();
  modal();
});
