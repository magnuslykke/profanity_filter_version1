"use strict";

console.log("er der hul igennem?");

const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

//

document.querySelector("button").addEventListener("click", knapKlikket);

function knapKlikket() {
  console.log("der er sgu klikket på en knap");
  // Opdater teksten i span-elementerne
  document.querySelector("#var").textContent = curseWords[0].good;
  document.querySelector("#float").textContent = curseWords[1].good;
  document.querySelector("#marquee").textContent = curseWords[2].good;
  // Find alle span-elementer igen, efter at teksten er blevet opdateret
  const spanElementer = document.querySelectorAll("span");
  // Tilføj baggrundsfarve til span-elementerne ved at tilføje klassen 'background_new'
  spanElementer.forEach((span) => {
    span.classList.add("spanclass_new");
  });
}

//DETTE VIRKEDE NÆSTEN:
// document.querySelector("button").addEventListener("click", knapKlikket);

// function knapKlikket() {
//   console.log("der er sgu klikket på en knap");

//   document.querySelector("#var").textContent.add(curseWords[0].good);
//   document.querySelector("#float").textContent.add(curseWords[1].good);
//   document.querySelector("#marquee").textContent.add(curseWords[2].good);
//   const spanElementer = document.querySelectorAll("span");
//   spanElementer.forEach((span) => {
//     span.classList.remove("spanclass_new");
//     span.classList.add("spanclass_new");
//   });
// }
