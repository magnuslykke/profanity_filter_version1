"use strict";

console.log("er der hul igennem?");

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", knapKlikket);

function knapKlikket() {
  const paragraph = document.querySelector("p");

  if (paragraph) {
    curseWords.forEach((curseWord) => {
      const regex = new RegExp(`\\b${curseWord.bad}\\b`, "g");
      paragraph.textContent = paragraph.textContent.replace(regex, curseWord.good);
    });
  }
}
