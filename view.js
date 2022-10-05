const headTag = document.querySelector("head");
headTag.insertAdjacentHTML(
  "beforeend",
  `
  <style>
  .virtual-content::-webkit-scrollbar {
    width: 8px;
  }
  .virtual-content::-webkit-scrollbar-track {
    background: #333;
    border-radius: 10px;
  }

  .virtual-content::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 10px;
  }
  .virtual-content::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
`
);

export const removeContentTip = function () {
  const bodyEl = document.querySelector("body");
  const contentTip = document.querySelector(".content-tip");
  if (contentTip) bodyEl.removeChild(contentTip);
};

export const addHoverListener = function (
  element,
  correctElement,
  correctText
) {
  element.addEventListener("mouseenter", function (e) {
    removeContentTip();
    console.log(element.getBoundingClientRect(), element, correctElement);
    const topPosition =
      window.pageYOffset + element.getBoundingClientRect().top;
    // const contentTipWraper = document.createElement('div');
    const contentTip = document.createElement("div");
    const arrow = document.createElement("span");
    const clipboardCopy = document.createElement("span");

    contentTip.classList.add("content-tip");
    arrow.classList.add("arrow");
    clipboardCopy.classList.add("clip-copy");

    clipboardCopy.addEventListener("mouseenter", function () {
      this.style.color = "#fff";
    });

    clipboardCopy.addEventListener("mouseleave", function () {
      this.style.color = "#bbb";
    });

    clipboardCopy.addEventListener("click", function () {
      this.textContent = "Copied";
      console.log(correctText);
      navigator.clipboard.writeText(correctText);
    });

    contentTip.style.cssText = `
      background-color: rgb(51, 51, 51);
      position: absolute;
      top: ${topPosition}px;
      transform:translateY(-110%);
      left: 30%;
      padding: 20px 0;
      z-index: 10000;
      border-radius: 15px;
      box-shadow: 3px 6px 20px rgb(0 0 0 / 50%);
      color: #bbb;
      font-size: 18px;
      visibility: hidden;
    `;

    arrow.innerHTML = "&nbsp;";
    arrow.style.cssText = `
      bottom: -10px;
      position: absolute;
      height: 20px;
      width: 20px;
      background-color: rgb(51, 51, 51);
      transform: rotate(45deg);
      left: 0;
      right: 0;
      margin: auto;
    `;

    clipboardCopy.textContent = "Copy";
    clipboardCopy.style.cssText = `
      position: absolute;
      top: 12px;
      right: 14px;
      cursor: pointer;
      background-color: #222;
      padding: 2px 10px;
      font-size: 16px;
      border-radius: 7px;
    `;

    contentTip.appendChild(clipboardCopy);
    contentTip.appendChild(arrow);
    contentTip.appendChild(correctElement);

    document.querySelector("body").appendChild(contentTip);
    console.log(contentTip.getBoundingClientRect());
    contentTip.style.visibility = "visible";
  });
};
