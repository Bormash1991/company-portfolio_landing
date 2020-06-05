const scroll = () => {
  const checkHeader = () => {
    const header = document.querySelector(".header");
    const position = window.getComputedStyle(header).position;

    if (position == "fixed") {
      const height = window.getComputedStyle(header).height;

      return height.slice(0, height.length - 2);
    } else {
      return 0;
    }
  };

  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = +checkHeader();
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });
};
export default scroll;
