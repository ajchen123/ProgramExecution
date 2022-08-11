'use strict';

// get elements that need to be modified in the HTML
const word = document.querySelector(".word"); // gets word element
const clue = document.querySelector("#clue"); // gets clue element
const canvas = document.querySelector("#canvas"); // gets canvas element
const win = document.querySelector(".win"); // gets win popup element
const lost = document.querySelector(".lost"); // gets lost pop up element

// variable definitions
const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "id attribute", clue: "Specifies a unique id for an HTML element."}, 
  {word: "attribute", clue: "A piece of markup language used to adjust the behavior or display of an HTML element."}, 
  {word: "h1 element", clue: "The highest level or most important heading in the HTML document."}, 
  {word: "tag", clue: "A set of characters constituting a formatted command for a Web page."}, 
  {word: "element", clue: "Defined by a start tag, some content, and an end tag."}, 
  {word: "div tag", clue: "Defines a division or a section in an HTML document. Used as a container for HTML elements."}, 
  {word: "src attribute", clue: "Specifies the URL of the media file to play."}, 
  {word: "h1 element", clue: "The highest level or most important heading in the HTML document."}, 
  {word: "section tag", clue: "Defines the _ of documents such as chapters, headers, and footers."}, 
  {word: "anchor element", clue: "Defines a hyperlink, which is used to link from one page to another."}, 
  {word: "flexbox", clue: "A one-dimensional layout method for arranging items in rows or columns."}, 
  {word: "class attribute", clue: "Specifies one or more class names for an element."}, 
  {word: "button tag", clue: "Used to define the clickable button."}, 
  {word: "flexgrid", clue: "A two-dimensional layout method for arranging items in rows and columns."}, 
  {word: "bulma", clue: "A free, open-source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces."}, 
  {word: "queryselector", clue: "A document method that returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned."}, 
  {word: "event listener", clue: "A procedure or function in a computer program that waits for an event to occur."}, 
  {word: "innerhtml", clue: "An element property that gets or sets the HTML markup contained within a specified element."}, 
  {word: "data type", clue: "A classification that specifies which type of value a variable has and what type of mathematical, relational, or logical operations can be applied to it without causing an error. Ex: boolean, null, undefined, number, bigint, string, and symbol."}, 
  {word: "data structures", clue: "A predefined format for efficiently storing, accessing, and processing data in a computer program."}, 
  {word: "conditionals", clue: "Perform different computations or actions depending on whether a programmer-defined boolean condition evaluates to true or false."}, 
  {word: "for loop", clue: "A programming language conditional iterative statement used to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met."}, 
  {word: "string", clue: "Data type used for data values that are made up of ordered sequences of characters."}, 
  {word: "boolean", clue: "A data type with two possible values: true or false."}, 
  {word: "variables", clue: "Used to store information to be referenced and used by programs."}, 
  {word: "concatenation", clue: "The operation of joining two strings together. Ex: console.log(“hang” + “man”);"}, 
  {word: "const", clue: "A keyword that defines a variable or pointer as unchangeable."}, 
  {word: "let", clue: "A keyword that is used to declare a block scoped variable."}, 
  {word: "scope", clue: "Is the current context of code, which determines the accessibility of variables to JavaScript."}, 
  {word: "control flow", clue: "The order in which the computer executes statements in a script."}, 
  {word: "classlist", clue: "A DOMTokenList object that represents the contents of the element's class attribute."}, 
  {word: "function", clue: "A block of code that's written to perform some specific set of tasks."}, 
  {word: "method", clue: "A property of an object that contains a function definition. Implicitly passes the object on which it was called."}, 
  {word: "array", clue: "Enables storing a collection of multiple items under a single variable name."}, 
  {word: "index", clue: "Indicates the position of the element."}, 
  {word: "iteration", clue: "A process where a set of instructions or structures are repeated in a sequence a specified number of times or until a condition is met."}, 
  {word: "foreach", clue: "A method that executes a provided function once for each value in the set object, in insertion order."}, 
  {word: "split", clue: "A method that splits a string into an array of substrings."}, 
  {word: "splice", clue: "A method that lets you change the content of your array by removing or replacing existing elements with new ones. This method modifies the original array and returns the removed elements as a new array."}, 
  {word: "child", clue: "An element that is an immediate descendent of another element or nested within another element is called this."}, 
  {word: "line break", clue: "This tag is used in a block of text to separate paragraphs. <br>"}, 
  {word: "unordered list", clue: "Lists whose items are denoted with bullet points. <ul></ul>"}, 
  {word: "ordered list", clue: "Lists whose items are denoted with numbers. <ol></ol>"},
  {word: "if statement", clue: "a specified block of code to be executed, if the condition is true"},
  {word: "await", clue: "A keyword used to wait for a Promise. It can only be used inside an async function within regular JavaScript code"},
  {word: "async", clue: "A keyword that allows for asynchronous, promise-based behavior to be written in a cleaner style. Used with await keyword."},
  {word: "fetch", clue: "A method that returns a Promise that resolves into a Response object. Used to request to the server"},
  {word: "api", clue: "A way for two or more computer programs to communicate with each other and offers a service to other pieces of software"},
  {word: "json", clue: "A text-based data format that is used to store and transfer data, independent of any programming language and a common API output in a wide variety of applications."},
  {word: "endpoint", clue: "A point at which an API connects with the software program"},
  {word: "promise", clue: "An object represents the eventual completion (or failure) of an asynchronous operation and its resulting value."},
  {word: "api key", clue: "A code used to identify and authenticate an application or user"},
  {word: "nav element", clue: "An HTML element that represents a section of a page whose purpose is to provide navigation, for instance menus, tables of contents, and indexes"},
  {word: "for of loop", clue: "Creates a loop over iterable objects like strings, arrays, and array-like objects"},
  {word: "push method", clue: "An array method that adds items to the end of the array and returns the new array length"},
  {word: "join method", clue: "An array method that creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string."}
  ]; // word bank
let guesses = [" "]; // array of user guesses, cannot guess a blank
let counter = 0; // number of wrong guesses (does not include duplicates)
let gameOver = false;

//setting up the game
let wordIndex = Math.floor(Math.random() * words.length); // gets index of random word
let secret = words[wordIndex].word; // gets secret word
let secretClue = words[wordIndex].clue; // gets secret clue
clue.textContent = secretClue; // displays secret clue

// Display stand and blanks
function addBlanks() {
  for(let i = 0; i<secret.length; i++){
    let blank = document.createElement("li"); 
    let blanknode = document.createTextNode("_");
    blank.setAttribute("id",`letter${i}`);
    blank.setAttribute("class", "letters");
    blank.appendChild(blanknode);
    word.appendChild(blank);
  }

  for(let i = 0; i<secret.length; i++){
    let secretLetter = secret.slice(i, i+1);
    if(" " == secretLetter){ // A: can you do if (' ' === secret.charAt(i))
      document.querySelector(`#letter${i}`).textContent = " ";
    }
  }
}
function drawStand(){
  if (canvas.getContext("2d")) { 
    let context = canvas.getContext("2d");
  
    if(counter>=0){
      //stand
      context.beginPath();
      context.moveTo(40, 175);
      context.lineTo(120, 175);
      context.moveTo(80, 175);
      context.lineTo(80, 25);
      context.moveTo(80, 25);
      context.lineTo(175, 25);
      context.moveTo(175, 25);
      context.lineTo(175, 35);
      context.stroke();
    }
  }
}
addBlanks();
drawStand();

// Draws hang man based of how many wrong letters have been guessed
function updateStickman(){
  if (canvas.getContext("2d")) { 
    let context = canvas.getContext("2d");
    
    if(counter>0){
      // head
      context.beginPath();
      context.arc(175, 50, 15, 0, Math.PI * 2); 
      context.stroke();
    }
    
    if(counter>1){
      // body
      context.beginPath();
      context.moveTo(175, 65);
      context.lineTo(175, 115);
      context.stroke();
    }
    
    if(counter>2){
      // left arm
      context.beginPath();
      context.moveTo(175, 75);
      context.lineTo(145, 100);
      context.stroke();
    }
    
    if(counter>3){
      // right arm
      context.beginPath();
      context.moveTo(175, 75);
      context.lineTo(205, 100);
      context.stroke();
    }
    
    if(counter>4){
      // left leg
      context.beginPath();
      context.moveTo(175, 115);
      context.lineTo(145, 160);
      context.stroke();
    }
    
    if(counter>5){
      // right leg
      context.beginPath();
      context.moveTo(175, 115);
        context.lineTo(205, 160);
      context.stroke();
    }
  }
}

// Returns the number of correct letters guessed in the secret word
function winCheckFun(){
  let correct = 0;
  for(let i = 0; i < secret.length; i++){
    if(guesses.indexOf(secret.charAt(i)) !== -1){
      correct++;
    }
  }
  
  if (correct == secret.length) {
    win.classList.remove("is-hidden");
    gameOver = true;
  }
  
  if (counter > 5) {
    lost.classList.remove("is-hidden");
    gameOver = true;
  } 
}

window.addEventListener("keydown", (event) => {
  if (gameOver === false) {
    if (event.keyCode >= 65 && event.keyCode <= 90) { // key is a valid letter
        if (guesses.indexOf(event.key) === -1) { // letter has not been guessed yet
          guesses.push(event.key);
          console.log(guesses);
          if (secret.indexOf(event.key) === -1){ // letter is wrong
            counter++;
            console.log(counter);
          }
        }
        else { // letter has been guessed before
          alert("You've previously guessed this letter.");
        }
      }
  
      // Displays the correct letters so far
      guesses.forEach(e => {
        for(let i = 0; i<secret.length; i++){
          let secretLetter = secret.slice(i, i+1);
          if(e == secretLetter){
            document.querySelector(`#letter${i}`).textContent = secretLetter;
          }
        }
      });
    
      winCheckFun();
      updateStickman();
  }
});



// ---------------- RESETING THE GAME -------------------
// closes win popup
document.querySelector("#winClose").addEventListener("click", () => {
    win.classList.add("is-hidden");
});

// closes lose popup
document.querySelector("#lostClose").addEventListener("click", () => {
    lost.classList.add("is-hidden");
});

// play again button
function playAgain(result) {
  document.getElementById(result).addEventListener("click", () => {
    if (window.getComputedStyle(win).display !== "none") {
      win.classList.add("is-hidden");
    }
    if (window.getComputedStyle(lost).display !== "none") {
      lost.classList.add("is-hidden");
    }

    // canvas
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    // clears word
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
    
    guesses = [" "];
    counter = 0;
    gameOver = false;
    
    wordIndex = Math.floor(Math.random() * words.length);
    secret = words[wordIndex].word;
    secretClue = words[wordIndex].clue;
    clue.textContent = secretClue;
    
    addBlanks();
    drawStand();
  });
}

playAgain("winAgain");
playAgain("lostAgain");