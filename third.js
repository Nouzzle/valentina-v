"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3\nI hope i can see you soon :3\nI love you :3\nHappy Valentines :3\n";
  buttonsContainer.classList.add("hidden");
  changeImage("yes2");

  var surpriseButton = document.createElement('button');
  surpriseButton.textContent = 'click this!!!the last message for u <3';
  surpriseButton.addEventListener('click', function() {
      window.location.href = 'final.html'; // Replace with the URL of your new page
  });
  titleElement.after(surpriseButton);
}



function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "gamungkin kamu click ini dong bang 😼",
    "woi yang benar aje",
    "rugi dong!",
    "bang udah bang!",
    "udah bjir 😾",
    "woi!!! yang bener aja !!!",
    "woi!",
    "marah ni gweh 😾!",
    "srius bjir!",
    "😿😿😿😿😿",
    "bjir masi di klik, udah beneran gabisa bang 😿 ",
  ];  

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpeg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
document.getElementById('yes-button').addEventListener('click', handleYesClick);
