export const addHoverListener = function (element) {
  element.addEventListener("mouseenter", function (e) {
    console.log(element.getBoundingClientRect());
  });
};
