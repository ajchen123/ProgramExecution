'use strict';

const glossary = document.getElementById("glossary");

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
  ];

words.sort(function(a, b) {
  if(a.word < b.word) {
    return -1;
  }else if(a.word > b.word){
    return 1;
  }else{
    return 0;
  }
}); 
console.log(words);

for(let element of words){
  glossary.innerHTML += `<h2>${element.word}</h2><p>${element.clue}</p><br>`;
}

const backToTop = document.querySelector(".top");

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 100) {
    backToTop.classList.remove("hidden");
  } else {
    backToTop.classList.add("hidden");
  }
});

backToTop.addEventListener("click", goToTop);



