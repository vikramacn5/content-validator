export const addHoverListener = function (element, correctElement) {
  element.addEventListener("mouseenter", function (e) {
    console.log(element.getBoundingClientRect(), element, correctElement);
    const contentTip = document.createElement("div");
    const arrow = document.createElement("span");
    arrow.classList.add("arrow");
    arrow.innerHTML = "&nbsp;";
    arrow.style.cssText = `
      bottom: -10px;
      position: absolute;
      height: 20px;
      width: 20px;
      background-image: linear-gradient(to right bottom, transparent 50%, rgb(51, 51, 51) 50%);
      transform: rotate(45deg);
      left: 0;
      right: 0;
      margin: auto;
      box-shadow: 3px 6px 20px rgb(0 0 0 / 50%);
    `;
    contentTip.appendChild(arrow);
    contentTip.classList.add("content-tip");
    contentTip.appendChild(correctElement);
    contentTip.style.cssText = `
      max-height: 200px;
      width: 330px;
      background-color: rgb(51, 51, 51);
      position: absolute;
      top: 150px;
      left: 30%;
      padding: 20px 40px;
      z-index: 10000;
      border-radius: 15px;
      box-shadow: 3px 6px 20px rgb(0 0 0 / 50%);
      color: #bbb;
      font-size: 18px;
    `;
    document.querySelector("body").appendChild(contentTip);
  });
};
