import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const slider = (
  containerSelector,
  counter,
  loopSelector,
  auto,
  centerSelector,
  controlSelector,
  activeSelector,
  responsive = ""
) => {
  const sl = tns({
    container: containerSelector,
    items: counter,
    slideBy: 1,
    autoplay: auto,
    center: centerSelector,
    loop: loopSelector,
    nav: false,
    autoplayButtonOutput: false,
    controlsContainer: controlSelector,
    responsive,
  });
  if (activeSelector) {
    const showActiveSlide = () => {
      const info = sl.getInfo(),
        indexPrev = info.indexCached,
        indexCurrent = info.index,
        items = info.slideItems;
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove(activeSelector);
      }

      info.slideItems[indexPrev].classList.remove(activeSelector);
      info.slideItems[indexCurrent].classList.add(activeSelector);
    };
    showActiveSlide();
    sl.events.on("indexChanged", () => {
      showActiveSlide();
    });
  }
  const customSlider = () => {
    const custom = tns({
      container: ".feedback__slider-wrapper",
      items: 3,
      slideBy: 3,
      autoplay: false,
      center: false,
      loop: false,
      nav: false,
      rewind: true,
      nextButton: ".feedback__slider-next",
      prevButton: ".feedback__slider-prev",
      autoplayButtonOutput: false,
      gutter: 21,
      preventScrollOnTouch: "force",
      responsive: {
        320: { items: 1, slideBy: 1, gutter: 0, autoWidth: true },
        576: { items: 1, slideBy: 1, gutter: 0, autoWidth: true },
        768: {
          items: 2,
          slideBy: 2,
        },
        1024: {
          items: 3,
          slideBy: 3,
          autoWidth: true,
          gutter: 23,
        },
      },
    });
    const total = document.querySelector(".feedback__counter-total"),
      current = document.querySelector(".feedback__counter-current"),
      next = document.querySelector(".feedback__slider-next"),
      prev = document.querySelector(".feedback__slider-prev");
    const addZero = (a) => {
      if (a < 10) {
        return `0${a}`;
      } else {
        return a;
      }
    };
    let data = custom.getInfo();
    total.textContent = addZero(data.slideCount);
    const checkSlide = () => {
      data = custom.getInfo();
      const value = data.slideBy;
      current.textContent = addZero(data.displayIndex + value - 1);
    };
    checkSlide();
    next.addEventListener("click", () => {
      checkSlide();
    });
    prev.addEventListener("click", () => {
      checkSlide();
    });

    custom.events.on("indexChanged", () => {
      checkSlide();
    });
  };
  customSlider();
};

export default slider;
