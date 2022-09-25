"use strict";

import { diff } from "./fast-diff.js";

// export const diffCheck = function (oldStr, newStr) {
//   let span = null;

//   const diff = Diff.diffChars(oldStr, newStr),
//     fragment = document.createElement("span");

//   diff.forEach((part) => {
//     const color = part.added ? "green" : part.removed ? "red" : "currentcolor";
//     span = document.createElement("span");
//     span.style.color = color;
//     if (part.value === " ") span.style.background = color;
//     span.appendChild(document.createTextNode(part.value));
//     fragment.appendChild(span);
//   });

//   return fragment;
// };

export const diffCheck = function (oldStr, newStr) {
  let span = "null";

  var result = diff(oldStr, newStr);
  console.log(result);

  const fragment = document.createElement("span");

  result.forEach((part) => {
    const color =
      part[0] === 1 ? "green" : part[0] === -1 ? "red" : "currentcolor";
    const background =
      part[0] === 1 ? "#cee9ce" : part[0] === -1 ? "#ffbaba" : "transparent";
    span = document.createElement("span");
    span.style.color = color;
    span.style.background = background;
    span.appendChild(document.createTextNode(part[1]));
    fragment.appendChild(span);
  });

  return fragment;
};
