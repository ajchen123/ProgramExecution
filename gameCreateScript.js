'use strict';

const navleft = document.querySelector("#navleft");
const navright = document.querySelector("#navright");
const infoContent = document.querySelector("#info-content");

const combinedTab = document.querySelector("#combined-tab");
const currentTab = document.querySelector("#current-tab");
const htmlTab = document.querySelector("#html-tab");
const cssTab = document.querySelector("#css-tab");
const combinedCode = document.querySelector("#combined-code");
const currentCode = document.querySelector("#current-code");
const htmlCode = document.querySelector("#html-code");
const cssCode = document.querySelector("#css-code");

let slideNumber = 0;
const slideContent = [
// SLIDE 0
`<h2>Getting Started</h2>
<p>Welcome to creating Hangman! We will primarily be working with Java Script this module. Here are a few tips on how to navigate this page:</p>
<p class="shifted"><b>1.</b> Click the arrows on the left and right to progress through the module.<br>
<b>2.</b> The tab "Current" on the left will display the portion of the code we are
  currently working on.<br>
<b>3.</b> The tab "Combined" on the left will display all the code we have worked on so far. It will automatically update to the correct code as we progress through the module.<br>
<b>4.</b> Write your code where &lt;YOUR CODE&gt; appears in the “Current Tab”.<br>
<b>5.</b> The tabs "HTML" and “CSS” will show the HTML and CSS, respectively, for the game page.<br>
<b>6.</b> Click the right arrow to get started!</p>`,
// SLIDE 1
`<h2>Declaring Variables</h2>
<p>
  First we will start with declaring our variables. We use document.querySelector() to obtain elements in the HTML that we will use in the JS. In addition to those objects, we will need the following variables:</p>
<p class="shifted"><b>words</b> → a word bank, represented as an array containing secret word objects<br>
<b>guesses</b> → an array that keeps track of guessed letters<br>
<b>counter</b> → a number that keeps track of the number of wrong guesses<br>
<b>gameOver</b> → a boolean that is false if the game is over, true if not.</p><br>
<p><b>YOU TRY:</b><br>
<b>1.</b> &nbsp;Can you find which selectors to use with querySelector? (Hint: go to the HTML and look at the ids and classes)<br>
<b>2.</b> &nbsp;At the start of the game, what should guesses, counter, and gameOver be initialized to?
</p>`,
//SLIDE 2
`<h2>Declaring Variables: <b>YOU TRY</b> Answers</h2>
<p>const word = document.querySelector("<b>.word"</b>);<br>
const clue = document.querySelector("<b>#clue</b>");<br>
const canvas = document.querySelector("<b>#canvas</b>");<br>
const win = document.querySelector("<b>.win</b>");<br>
const lost = document.querySelector("<b>.lost</b>");<br>
…<br>
let guesses = <b>[]</b>;<br>
let counter = <b>0</b>;<br>
let gameOver = <b>false</b>;<br>
<br>
<b>NOTE:</b> Remember to use “#” for id selectors and “.” for class selectors
</p>`,
//SLIDE 3
`<h2>Game Setup</h2>
<p>
  Now we need to set up the game. We need to randomly select a word from words and display the clue,
  using our clue object from earlier. Additionally, we have two functions to help us set up and display
  the blanks and stand:</p>
<p class="shifted"><b>addBlanks()</b> → for every letter in the secret word, adds a list item with empty blank
  “_”
  text to word in HTML. This displays the correct number of blanks on the page. Every blank is assigned
  a specific id that corresponds with its place in the word.<br>
  <b>drawStand()</b> → uses <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath"
    target="_blank"><u>beginPath()</u></a>, <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo"
    target="_blank"><u>moveTo()</b></u>, and <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo"
    target="_blank"><u>lineTo()</b></u> methods of canvas to draw empty stand. Click methods to learn more<br><br>
<p><b>YOU TRY:</b><br>
  <b>1.</b> How would you get a random word from words array?<br>
  <b>2.</b> How would you get the clue text from your secret word?<br>
</p>`,
//SLIDE 4
`<h2>Game Setup: <b>YOU TRY</b> Answers</h2>
<p>let wordIndex = <b>Math.floor(Math.random() * words.length);</b><br>
let secret = words[wordIndex].word;<br>
let secretClue = <b>words[wordIndex].clue;</b><br>
clue.textContent = secretClue;<br><br>
<b>NOTES:</b><br>
<b>-</b>&nbsp;&nbsp;Math.random() returns a random number 0 (inclusive) to 1 (non-inclusive)<br>
<b>-</b>&nbsp;&nbsp;To get an property from an object, use “.”
</p>`,
// SLIDE 5
`<h2>Playing Game</h2>
<p>
  So you’ve displayed the game on the page. Great! Now what? We want to make the game interactive, which we can do using window.addEventListener(). When the user presses down on a key, we will do the following:</p>
<p class="shifted">
<b>1.</b> &nbsp;Check to make sure the game isn’t over. If the game is over, pressing down on additional keys should not do anything.<br>
<b>2.</b> &nbsp;Check to make sure the key pressed is a letter. keyCode() method returns the ASCII of the key pressed.<br>
<b>3.</b> &nbsp;If the key pressed is a letter, check to see if the letter has been guessed yet. If the letter has not been guessed, add letter to guesses array. If letter is not in word, increment counter. If letter has been guessed, alert the player. Do not double penalize.<br>
<b>4.</b> &nbsp;Now with the updated guesses array, display the letters in the secret word that have been guessed. Do this by using querySelector() to change the text content of the blank from “_” to the letter.<br>
<b>5.</b> &nbsp;Update the Stickman to reflect the (possibly) new number of wrong guesses and check to see if the game is over now. We will implement this in the next slide. <br><br>
</p>
<p><b>YOU TRY:</b><br>
<b>1.</b> &nbsp;What event type are we listening for? Click <a href="https://developer.mozilla.org/en-US/docs/Web/Events
" target="_blank"><u>here</u></a> for a full list of different event types<br>
<b>2.</b> &nbsp;How do we check to see if the game is over?<br>
<b>3.</b> &nbsp;How do you check to see if an element is in an array?<br>
<b>4.</b> &nbsp;How do you get a letter out of a word?<br>
<b>5.</b> &nbsp;What was the selector for the text in one of the blanks in words?
</p>`,
// SLIDE 6
`<h2>Playing Game: <b>YOU TRY</b> Answers</h2>
<p>
window.addEventListener(<b>"keydown"</b>, (event) => {<br>
  &nbsp; &nbsp;if (gameOver === <b>false</b>) {<br>
    &nbsp; &nbsp;&nbsp; &nbsp;if (event.keyCode >= 65 && event.keyCode <= 90) {<br>
        &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;if (guesses.indexOf(event.key) === <b>-1</b>) {<br>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;guesses.push(event.key);<br>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;if (secret.indexOf(event.key) === <b>-1</b>){<br>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;<b>counter++;</b><br>
	&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;…<br>
      &nbsp; &nbsp;guesses.forEach(e => {<br>
        &nbsp; &nbsp;&nbsp; &nbsp;for (let i = 0; i&lt;secret.length; i++) {<br>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;let secretLetter = <b>secret.slice(i, i+1)</b>;<br>
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;if (e == secretLetter) {<br>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;document.querySelector(<b>\`#letter\${i}\`</b>).textContent = secretLetter;<br>
…<br><br>

<b>NOTES:</b><br>
&nbsp; <b>-</b> &nbsp;indexOf() returns -1 if element not found in the array<br>
&nbsp; <b>-</b> &nbsp;read more about the slice() method of string <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target="_blank"><u>here</u></a>
</p>`,
// SLIDE 7
`<h2>Additional Functions</h2>
<p>Sometimes it is useful to group code together in a function to organize better. We use the following two functions in the previous slide:</p>
<p class = "shifted"><b>updateStickman()</b> → uses beginPath(), arc(), stroke(), moveTo(), and lineTo() methods from the Canvas class to draw different parts of the stickman based on counter (how many wrong letters the user has guessed)<br>
<b>winCheck()</b> → sums up the number of letters in the secret word that have been guessed. If the all the letters have been guessed, shows Win popup. If the player has made more than 5 wrong guesses, Lost popup is shown</p><br>
<p><b>YOU TRY:</b><br>
<b>1.</b> &nbsp;What is the condition for the body of the stickman to show? The arm? (Hint: use counter)<br>
<b>2.</b> &nbsp;How do we know if a letter in the secret word has been guessed? (Hint: use guesses array)<br>
<b>3.</b> &nbsp;What condition would we show the Win popup? How do we know if the player has made >5 wrong guesses? (Hint: use counter)
</p>`,
// SLIDE 8
`<h2>Additional Functions: <b>YOU TRY</b> Answers</h2>
<p>
function updateStickman() {<br>
…<br>
    &nbsp; &nbsp;if (<b>counter>1</b>) {// body…}<br>
    &nbsp; &nbsp;if (<b>counter>2</b>) {// left arm…}<br>
    &nbsp; &nbsp;if (<b>counter>3</b>) {// right arm…}<br>
    &nbsp; &nbsp;if (<b>counter>4</b>) {// left leg… }  <br>  
    &nbsp; &nbsp;if (<b>counter>5</b>) {// right leg… }<br>
<br>
function winCheck() {<br>
  &nbsp; &nbsp;let correct = 0;<br>
  &nbsp; &nbsp;for (let i = 0; i < secret.length; i++) {<br>
    &nbsp; &nbsp;&nbsp; &nbsp;if (<b>guesses.indexOf(secret.charAt(i)) !== -1</b>) {<br>
      &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;correct++;<br>
…<br>
  &nbsp; &nbsp;if (<b>correct == secret.length</b>) {<br>
    &nbsp; &nbsp;&nbsp; &nbsp;win.classList.remove("is-hidden");<br>
    &nbsp; &nbsp;&nbsp; &nbsp;<b>gameOver = true</b>;<br>
  &nbsp; &nbsp;}<br>
  <br>
  &nbsp; &nbsp;if (<b>counter > 5</b>) {<br>
    &nbsp; &nbsp;&nbsp; &nbsp;lost.classList.remove("is-hidden");<br>
    &nbsp; &nbsp;&nbsp; &nbsp;<b>gameOver = true</b>;<br>
  &nbsp; &nbsp;} <br>
}<br><br>
<b>NOTES:</b> Make sure to define these functions before you use them!
</p>`,
// SLIDE 9
`<h2>Reset Game</h2>
<p>When the game is over, a popup shows. From there, the user has two options: either close the popup, or click “Play again” and the game resets itself. We need to grab the x button on each of the popups and make the popup close if clicked using addEventListener. Similarly, we should close the popup if the “Play again” button is clicked. Additionally, we need to reset our variables, select a new word, add blanks, and draw the empty stand on the page.<br><br>

<b>YOU TRY:</b><br>
<b>1.</b>&nbsp; What selector do we use to get the x button? (Hint: look in the HTML)<br>
<b>2.</b>&nbsp; What class is responsible for hiding the popups? (Hint: look in the HTML)<br>
<b>3.</b>&nbsp; What event are we listening for?<br>
<b>4.</b>&nbsp; What should the variable values be at the beginning of the game? (Hint: scroll up :))
</p>`,
// SLIDE 10
`<h2>Reset Game: <b>YOU TRY</b> Answers</h2>
<p>document.querySelector(<b>"#winClose"</b>).<br>addEventListener(click", () => {<br>
&nbsp; &nbsp;win.classList.add(<b>"is-hidden"</b>));<br>
});<br><br>

document.querySelector(<b>"#lostClose"</b>).<br>addEventListener("click", () => {<br>
&nbsp; &nbsp;lost.classList.add(<b>"is-hidden"</b>);<br>
});<br><br>

function playAgain(result) {<br>
&nbsp; &nbsp;document.getElementById(result).<br>&nbsp; &nbsp;addEventListener(<b>"click"</b>, () => {<br>
…<br>
&nbsp; &nbsp;&nbsp; &nbsp;guesses = <b>[]</b>;<br>
&nbsp; &nbsp;&nbsp; &nbsp;counter = <b>0</b>;<br>
&nbsp; &nbsp;&nbsp; &nbsp;gameOver = <b>false</b>;<br>
…
</p>`,
// SLIDE 11
`<h2>Game Finished!</h2>
<p>Congrats! You have just finished coding Hangman. You can copy paste the completed JS, HTML, and CSS files into an IDE and run it to see the full game in action. Or, click the “Play” tab in the navigation bar to play a game of Hangman right here. We also encourage you to check out the “Glossary” tab to review vocab terms and the “Resources” tab for more computer science related content :) <br><br> Happy Coding!
</p>
`
];
const currentContent = [
// SLIDE 0
``,
// SLIDE 1
`//-----------------DECLARE VARIABLES------------------
const word = document.querySelector("<YOUR CODE>");
const clue = document.querySelector("<YOUR CODE>");
const canvas = document.querySelector("<YOUR CODE>");
const win = document.querySelector("<YOUR CODE>");
const lost = document.querySelector("<YOUR CODE>");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "id attribute", clue: "Specifies a unique id for an HTML element."}, 
  {word: "element", clue: "Defined by a start tag, some content, and an end tag."}
  ];
let guesses = <YOUR CODE>;
let counter = <YOUR CODE>;
let gameOver = <YOUR CODE>;`,
// SLIDE 2
`//-----------------DECLARE VARIABLES------------------
const word = document.querySelector("<YOUR CODE>");
const clue = document.querySelector("<YOUR CODE>");
const canvas = document.querySelector("<YOUR CODE>");
const win = document.querySelector("<YOUR CODE>");
const lost = document.querySelector("<YOUR CODE>");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "id attribute", clue: "Specifies a unique id for an HTML element."}, 
  {word: "element", clue: "Defined by a start tag, some content, and an end tag."}
  ];
let guesses = <YOUR CODE>;
let counter = <YOUR CODE>;
let gameOver = <YOUR CODE>;`,
// SLIDE 3
`//------------GAME SETUP------------
  let wordIndex = <YOUR CODE>;
  let secret = words[wordIndex].word;
  let secretClue = <YOUR CODE>;
  clue.textContent = secretClue;
  
  function addBlanks() {
    for(let i = 0; i<secret.length; i++){
      let blank = document.createElement("li"); 
      let blanknode = document.createTextNode("_");
      blank.setAttribute("id",\`letter\${i}\`);
      blank.appendChild(blanknode);
      word.appendChild(blank);
    }
  
  }
  
  function drawStand(){
      let context = canvas.getContext("2d");
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
  
  addBlanks();
  drawStand();`,
// SLIDE 4
`//------------GAME SETUP------------
  let wordIndex = <YOUR CODE>;
  let secret = words[wordIndex].word;
  let secretClue = <YOUR CODE>;
  clue.textContent = secretClue;
  
  function addBlanks() {
    for(let i = 0; i<secret.length; i++){
      let blank = document.createElement("li"); 
      let blanknode = document.createTextNode("_");
      blank.setAttribute("id",\`letter\${i}\`);
      blank.appendChild(blanknode);
      word.appendChild(blank);
    }
  
  }
  
  function drawStand(){
      let context = canvas.getContext("2d");
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
  
  addBlanks();
  drawStand();`,
// SLIDE 5
`//-----------------PLAYING GAME-----------------
window.addEventListener("<YOUR CODE>", (event) => {
  if (gameOver === <YOUR CODE>) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (guesses.indexOf(event.key) === <YOUR CODE>) {
          guesses.push(event.key);
          if (secret.indexOf(event.key) === <YOUR CODE>){
            counter = <YOUR CODE>;
          }
        }
        else {
          alert("You've previously guessed this letter.");
        }
      }
  
      guesses.forEach(e => {
        for(let i = 0; i<secret.length; i++){
          let secretLetter = <YOUR CODE>;
          if(e == secretLetter){
            document.querySelector(\`<YOUR CODE>\`).textContent = secretLetter;
          }
        }
      });
    
      updateStickman();
      winCheck();
  }
});`,
// SLIDE 6
`//-----------------PLAYING GAME-----------------
window.addEventListener("<YOUR CODE>", (event) => {
  if (gameOver === <YOUR CODE>) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (guesses.indexOf(event.key) === <YOUR CODE>) {
          guesses.push(event.key);
          if (secret.indexOf(event.key) === <YOUR CODE>){
            counter = <YOUR CODE>;
          }
        }
        else {
          alert("You've previously guessed this letter.");
        }
      }
  
      guesses.forEach(e => {
        for(let i = 0; i<secret.length; i++){
          let secretLetter = <YOUR CODE>;
          if(e == secretLetter){
            document.querySelector(\`<YOUR CODE>\`).textContent = secretLetter;
          }
        }
      });
    
      updateStickman();
      winCheck();
  }
});`,
// SLIDE 7
`//--------------ADDITIONAL FUNCTIONS--------------
function updateStickman(){
    let context = canvas.getContext("2d");
    
    if(counter>0){
      // head
      context.beginPath();
      context.arc(175, 50, 15, 0, Math.PI * 2); 
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // body
      context.beginPath();
      context.moveTo(175, 65);
      context.lineTo(175, 115);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // left arm
      context.beginPath();
      context.moveTo(175, 75);
      context.lineTo(145, 100);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // right arm
      context.beginPath();
      context.moveTo(175, 75);
      context.lineTo(205, 100);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // left leg
      context.beginPath();
      context.moveTo(175, 115);
      context.lineTo(145, 160);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // right leg
      context.beginPath();
      context.moveTo(175, 115);
      context.lineTo(205, 160);
      context.stroke();
    }
}

function winCheck(){
  let correct = 0;
  for(let i = 0; i < secret.length; i++){
    if(<YOUR CODE>){
      correct++;
    }
  }
  
  if (<YOUR CODE>) {
    win.classList.remove("is-hidden");
    gameOver = <YOUR CODE>;
  }
  
  if (<YOUR CODE>) {
    lost.classList.remove("is-hidden");
    gameOver = <YOUR CODE>;
  } 
}`,
// SLIDE 8
`//--------------ADDITIONAL FUNCTIONS--------------
function updateStickman(){
    let context = canvas.getContext("2d");
    
    if(counter>0){
      // head
      context.beginPath();
      context.arc(175, 50, 15, 0, Math.PI * 2); 
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // body
      context.beginPath();
      context.moveTo(175, 65);
      context.lineTo(175, 115);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // left arm
      context.beginPath();
      context.moveTo(175, 75);
      context.lineTo(145, 100);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // right arm
      context.beginPath();
      context.moveTo(175, 75);
      context.lineTo(205, 100);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // left leg
      context.beginPath();
      context.moveTo(175, 115);
      context.lineTo(145, 160);
      context.stroke();
    }
    
    if(<YOUR CODE>){
      // right leg
      context.beginPath();
      context.moveTo(175, 115);
      context.lineTo(205, 160);
      context.stroke();
    }
}

function winCheck(){
  let correct = 0;
  for(let i = 0; i < secret.length; i++){
    if(<YOUR CODE>){
      correct++;
    }
  }
  
  if (<YOUR CODE>) {
    win.classList.remove("is-hidden");
    gameOver = <YOUR CODE>;
  }
  
  if (<YOUR CODE>) {
    lost.classList.remove("is-hidden");
    gameOver = <YOUR CODE>;
  } 
}`,
// SLIDE 9
`// ---------------- RESET GAME -------------------
document.querySelector("<YOUR CODE>").addEventListener("click", () => {
    win.classList.add("<YOUR CODE>");
});

document.querySelector("<YOUR CODE>").addEventListener("click", () => {
    lost.classList.add("<YOUR CODE>");
});

function playAgain(result) {
  document.getElementById(result).addEventListener("<YOUR CODE>", () => {
    if (window.getComputedStyle(win).display !== "none") {
      win.classList.add("is-hidden");
    }
    if (window.getComputedStyle(lost).display !== "none") {
      lost.classList.add("is-hidden");
    }

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
    
    guesses = <YOUR CODE>";
    counter = <YOUR CODE>";
    gameOver = <YOUR CODE>";
    
    wordIndex = Math.floor(Math.random() * words.length);
    secret = words[wordIndex].word;
    secretClue = words[wordIndex].clue;
    clue.textContent = secretClue;
    
    addBlanks();
    drawStand();
  });
}

playAgain("winAgain");
playAgain("lostAgain");`,
// SLIDE 10
`// ---------------- RESET GAME -------------------
document.querySelector("<YOUR CODE>").addEventListener("click", () => {
    win.classList.add("<YOUR CODE>");
});

document.querySelector("<YOUR CODE>").addEventListener("click", () => {
    lost.classList.add("<YOUR CODE>");
});

function playAgain(result) {
  document.getElementById(result).addEventListener("<YOUR CODE>", () => {
    if (window.getComputedStyle(win).display !== "none") {
      win.classList.add("is-hidden");
    }
    if (window.getComputedStyle(lost).display !== "none") {
      lost.classList.add("is-hidden");
    }

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
    
    guesses = <YOUR CODE>";
    counter = <YOUR CODE>";
    gameOver = <YOUR CODE>";
    
    wordIndex = Math.floor(Math.random() * words.length);
    secret = words[wordIndex].word;
    secretClue = words[wordIndex].clue;
    clue.textContent = secretClue;
    
    addBlanks();
    drawStand();
  });
}

playAgain("winAgain");
playAgain("lostAgain");`,
// SLIDE 11
``
];
const combinedContent = [
// SLIDE 0
``,
// SLIDE 2
`'use strict';

//------------DECLARING VARIABLES------------
const word = document.querySelector(".word");
const clue = document.querySelector("#clue");
const canvas = document.querySelector("#canvas");
const win = document.querySelector(".win");
const lost = document.querySelector(".lost");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "boolean", clue: "A data type with two possible values: true or false."}, 
  {word: "attribute", clue: "A piece of markup language used to adjust the behavior or display of an HTML."}
  ];
let guesses = [];
let counter = 0;
let gameOver = false;`,
// SLIDE 4
`'use strict';

//------------DECLARING VARIABLES------------
const word = document.querySelector(".word");
const clue = document.querySelector("#clue");
const canvas = document.querySelector("#canvas");
const win = document.querySelector(".win");
const lost = document.querySelector(".lost");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "boolean", clue: "A data type with two possible values: true or false."}, 
  {word: "attribute", clue: "A piece of markup language used to adjust the behavior or display of an HTML."}
  ];
let guesses = [];
let counter = 0;
let gameOver = false;

//------------GAME SETUP------------
let wordIndex = Math.floor(Math.random() * words.length);
let secret = words[wordIndex].word;
let secretClue = words[wordIndex].clue;
clue.textContent = secretClue;

function addBlanks() {
  for(let i = 0; i<secret.length; i++){
    let blank = document.createElement("li"); 
    let blanknode = document.createTextNode("_");
    blank.setAttribute("id",\`letter\${i}\`);
    blank.appendChild(blanknode);
    word.appendChild(blank);
  }

}

function drawStand(){
    let context = canvas.getContext("2d");
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

addBlanks();
drawStand();
`,
// SLIDE 6
`'use strict';

//------------DECLARING VARIABLES------------
const word = document.querySelector(".word");
const clue = document.querySelector("#clue");
const canvas = document.querySelector("#canvas");
const win = document.querySelector(".win");
const lost = document.querySelector(".lost");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "boolean", clue: "A data type with two possible values: true or false."}, 
  {word: "attribute", clue: "A piece of markup language used to adjust the behavior or display of an HTML."}
  ];
let guesses = [];
let counter = 0;
let gameOver = false;

//------------GAME SETUP------------
let wordIndex = Math.floor(Math.random() * words.length);
let secret = words[wordIndex].word;
let secretClue = words[wordIndex].clue;
clue.textContent = secretClue;

function addBlanks() {
  for(let i = 0; i<secret.length; i++){
    let blank = document.createElement("li"); 
    let blanknode = document.createTextNode("_");
    blank.setAttribute("id",\`letter\${i}\`);
    blank.appendChild(blanknode);
    word.appendChild(blank);
  }

}

function drawStand(){
    let context = canvas.getContext("2d");
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

addBlanks();
drawStand();


//--------------ADDITIONAL FUNCTIONS--------------
function updateStickman(){
  // to be implemented
}

function winCheck(){
  // to be implemented
}

//-----------------PLAYING GAME-----------------
window.addEventListener("keydown", (event) => {
  if (gameOver === false) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (guesses.indexOf(event.key) === -1) {
          guesses.push(event.key);
          if (secret.indexOf(event.key) === -1){
            counter++;
          }
        }
        else {
          alert("You've previously guessed this letter.");
        }
      }
  
      guesses.forEach(e => {
        for(let i = 0; i<secret.length; i++){
          let secretLetter = secret.slice(i, i+1);
          if(e == secretLetter){
            document.querySelector(\`#letter\${i}\`).textContent = secretLetter;
          }
        }
      });
    
      updateStickman();
      winCheck();
  }
});`,
// SLIDE 8,
`'use strict';

//------------DECLARING VARIABLES------------
const word = document.querySelector(".word");
const clue = document.querySelector("#clue");
const canvas = document.querySelector("#canvas");
const win = document.querySelector(".win");
const lost = document.querySelector(".lost");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "boolean", clue: "A data type with two possible values: true or false."}, 
  {word: "attribute", clue: "A piece of markup language used to adjust the behavior or display of an HTML."}
  ];
let guesses = [];
let counter = 0;
let gameOver = false;

//------------GAME SETUP------------
let wordIndex = Math.floor(Math.random() * words.length);
let secret = words[wordIndex].word;
let secretClue = words[wordIndex].clue;
clue.textContent = secretClue;

function addBlanks() {
  for(let i = 0; i<secret.length; i++){
    let blank = document.createElement("li"); 
    let blanknode = document.createTextNode("_");
    blank.setAttribute("id",\`letter\${i}\`);
    blank.appendChild(blanknode);
    word.appendChild(blank);
  }

}

function drawStand(){
    let context = canvas.getContext("2d");
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

addBlanks();
drawStand();


//--------------ADDITIONAL FUNCTIONS--------------
function updateStickman(){
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

function winCheck(){
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

//-----------------PLAYING GAME-----------------
window.addEventListener("keydown", (event) => {
  if (gameOver === false) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (guesses.indexOf(event.key) === -1) {
          guesses.push(event.key);
          if (secret.indexOf(event.key) === -1){
            counter++;
          }
        }
        else {
          alert("You've previously guessed this letter.");
        }
      }
  
      guesses.forEach(e => {
        for(let i = 0; i<secret.length; i++){
          let secretLetter = secret.slice(i, i+1);
          if(e == secretLetter){
            document.querySelector(\`letter\${i}\`).textContent = secretLetter;
          }
        }
      });
    
      updateStickman();
      winCheck();
  }
});`,
// SLIDE 10
`'use strict';

//------------DECLARING VARIABLES------------
const word = document.querySelector(".word");
const clue = document.querySelector("#clue");
const canvas = document.querySelector("#canvas");
const win = document.querySelector(".win");
const lost = document.querySelector(".lost");

const words = [
  {word: "seven", clue: "Which CSSI cohort is the best?"},
  {word: "boolean", clue: "A data type with two possible values: true or false."}, 
  {word: "attribute", clue: "A piece of markup language used to adjust the behavior or display of an HTML."}
  ];
let guesses = [];
let counter = 0;
let gameOver = false;

//------------GAME SETUP------------
let wordIndex = Math.floor(Math.random() * words.length);
let secret = words[wordIndex].word;
let secretClue = words[wordIndex].clue;
clue.textContent = secretClue;

function addBlanks() {
  for(let i = 0; i<secret.length; i++){
    let blank = document.createElement("li"); 
    let blanknode = document.createTextNode("_");
    blank.setAttribute("id",\`letter\${i}\`);
    blank.appendChild(blanknode);
    word.appendChild(blank);
  }

}

function drawStand(){
    let context = canvas.getContext("2d");
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

addBlanks();
drawStand();

//--------------ADDITIONAL FUNCTIONS--------------
function updateStickman(){
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

function winCheck(){
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

//-----------------PLAYING GAME-----------------
window.addEventListener("keydown", (event) => {
  if (gameOver === false) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        if (guesses.indexOf(event.key) === -1) {
          guesses.push(event.key);
          if (secret.indexOf(event.key) === -1){
            counter++;
          }
        }
        else {
          alert("You've previously guessed this letter.");
        }
      }
  
      guesses.forEach(e => {
        for(let i = 0; i<secret.length; i++){
          let secretLetter = secret.slice(i, i+1);
          if(e == secretLetter){
            document.querySelector(\`#letter\${i}\`).textContent = secretLetter;
          }
        }
      });
    
      updateStickman();
      winCheck();
  }
});



// ---------------- RESET GAME -------------------
document.querySelector("#winClose").addEventListener("click", () => {
    win.classList.add("is-hidden");
});

document.querySelector("#lostClose").addEventListener("click", () => {
    lost.classList.add("is-hidden");
});

function playAgain(result) {
  document.getElementById(result).addEventListener("click", () => {
    if (window.getComputedStyle(win).display !== "none") {
      win.classList.add("is-hidden");
    }
    if (window.getComputedStyle(lost).display !== "none") {
      lost.classList.add("is-hidden");
    }

    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    while (word.firstChild) {
      word.removeChild(word.firstChild);
    }
    
    guesses = [];
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
playAgain("lostAgain");`
];
let left = false;

navleft.addEventListener("click", (event) => {
  left = true;
  if (slideNumber === 0)
    slideNumber = slideContent.length - 1;
  else
    slideNumber--;
  console.log(slideNumber);
  display();
});

navright.addEventListener("click", (event) => {
  left = false;
  if (slideNumber === slideContent.length - 1)
    slideNumber = 0;
  else
    slideNumber++;
  display();
});

function display() {
  infoContent.innerHTML = slideContent[slideNumber];
  combinedCode.value = combinedContent[Math.floor(slideNumber/2)];
  if (slideNumber % 2 === 1 || slideNumber === 0 || left === true)
    currentCode.value = currentContent[slideNumber];
}

combinedTab.addEventListener("click", (event) => {
  combinedTab.classList.add("is-active");
  currentTab.classList.remove("is-active");
  htmlTab.classList.remove("is-active");
  combinedCode.classList.remove("is-hidden");
  currentCode.classList.add("is-hidden");
  htmlCode.classList.add("is-hidden");
  cssTab.classList.remove("is-active");
  cssCode.classList.add("is-hidden");
});

currentTab.addEventListener("click", (event) => {
  combinedTab.classList.remove("is-active");
  currentTab.classList.add("is-active");
  htmlTab.classList.remove("is-active");
  combinedCode.classList.add("is-hidden");
  currentCode.classList.remove("is-hidden");
  htmlCode.classList.add("is-hidden");
  cssTab.classList.remove("is-active");
  cssCode.classList.add("is-hidden");
});

htmlTab.addEventListener("click", (event) => {
  combinedTab.classList.remove("is-active");
  currentTab.classList.remove("is-active");
  htmlTab.classList.add("is-active");
  combinedCode.classList.add("is-hidden");
  currentCode.classList.add("is-hidden");
  htmlCode.classList.remove("is-hidden");
  cssTab.classList.remove("is-active");
  cssCode.classList.add("is-hidden");
});

cssTab.addEventListener("click", (event) => {
  combinedTab.classList.remove("is-active");
  currentTab.classList.remove("is-active");
  htmlTab.classList.remove("is-active");
  combinedCode.classList.add("is-hidden");
  currentCode.classList.add("is-hidden");
  htmlCode.classList.add("is-hidden");
  cssTab.classList.add("is-active");
  cssCode.classList.remove("is-hidden");
});