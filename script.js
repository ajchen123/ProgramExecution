'use strict';

// Home Page
const navleft = document.querySelector("#navleft");
const navright = document.querySelector("#navright");

let index = 0;

const howTitle = document.querySelector("#howTitle");
const howSubTitle = document.querySelector("#howSubTitle");

const howTitles = ["How to play", "Step 1:", "Step 2:", "Step 3:"];
const howSubTitles = ["", "Guess letters that could be part of the random secret word.", "If correct, the letters will appear in the corressponding blank spaces. The goal of the game is to find the secret word.", "If incorrect, a body part of \"hangman\" will be hanged. If the entire man is hanged, you have lost the game."];

navleft.addEventListener("click", (event) => {
  if(index == 0){
    index = 4;
  }
  index--;
  howTitle.textContent = howTitles[index];
  howSubTitle.textContent = howSubTitles[index];
});

navright.addEventListener("click", (event) => {
  if(index == 3){
    index = -1;
  }
  index++;
  howTitle.textContent = howTitles[index];
  howSubTitle.textContent = howSubTitles[index];
});




