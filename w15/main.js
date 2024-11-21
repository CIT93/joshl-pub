import { renderTbl } from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData, getLS} from "./storage.js";
import {FP} from "./fp.js";

renderTbl(cfpData);

const validateField = event => {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === "") {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = "";
      event.target.classList.remove('invalid');
  }
};

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener("submit", e => {
  e.preventDefault();
  if (FNAME.value !== '' && LNAME.value !== '') {
    SUBMIT.textContent = '';
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value, FORM.foodc.value);
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    document.getElementById("submitError").textContent = "Form requires first name and last name";
  }  
});


//Part 1:
// Async example:
// let pizza
// function orderPizza () {
//   console.log(`order pizza`)
//   setTimeout(() => {
//   pizza = `🍕`
//   console.log(`${pizza} is ready`)
//   }, 2000)
//   console.log(`pizza was ordered`)
// };

// orderPizza();
// console.log(`call Alan`)
// console.log(`eat ${pizza}`);

//Part 2:
//Async with callbacks
// function orderPizza(callback) {
//   console.log(`Just ordered the pizza!`)
//   setTimeout(() => {
//     const pizza = `🍕`
//     callback(pizza)
//   }, 2000)
// }

// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log(`call Alan`)

//Part 3:
//callback clicks on the dom
// window.addEventListener('click', callback)
//   function callback() {
//     console.log(`clicked`)
//   }

//part 4:
//Call back hell! 
// function thing1(callback) {
//   //call pizza shop
//   callback()
// }

// function thing2(callback) {
//   //order the pizza
//   callback()
// }

// function thing3(callback) {
//   //eat the pizza
//   callback()
// }

// // no logic here, very simple callback hell
// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })