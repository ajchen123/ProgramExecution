'use strict';
console.log('script running!');

const questionInput=document.querySelector('#question-input');
const button=document.querySelector('.btn');
const emailInput=document.querySelector('#email-input');
const message=document.querySelector('#message');

// console.log(questionInput);

// questionInput.addEventListener('click', (event) => {
//   window.addEventListener("keydown", () => {
//     message.textContent = "Hello, I will contact you shortly with a response to your question!";
//   });
// });

button.addEventListener('click', (e) => {
  let question = true;
  let email = true;
  
  if(questionInput.value == ""){
    question = false;
  }
  if(emailInput.value == ""){
    email = false;
  }
  if(!(question || email)){
    message.textContent = "You have yet to enter an email or a question.";
  }else if(question && !email){
    message.textContent = "You have yet to enter an email.";
  }else if(!question && email){
    message.textContent = "You have yet to enter a question.";
  }else{
    questionInput.value = "";
    emailInput.value = "";
    message.textContent = "";
  }
});

//Button
const questionButton=document.querySelector('#question-button');

console.log(questionButton);

questionButton.addEventListener('click', (event) => {
  console.log('Your question will be answered shortly!')
  
  alert('Service Unavailable temporarily :(');

  console.log('done');
});
