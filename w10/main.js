import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData, getLS} from "./storage.js";

// Original start function code:
// const start = (firstName, lastName, houseHoldMembers, houseSize) => {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePTS = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: firstName,
//     lastName: lastName,
//     houseM: houseHoldMembers,
//     houseS: houseSize,
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// }

// attempting rest function code:
//firstName, lastName, houseHoldMembers, houseSize

const start = (...rest) => {
  const houseHoldPTS = determineHouseHoldPts(rest[2]);
  const houseSizePTS = determineHouseSizePts(rest[3]);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: rest[0],
    lastName: rest[1],
    houseM: rest[2],
    houseS: rest[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}


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
    start(FNAME.value, LNAME.value, parseInt(FORM.housem.value), FORM.houses.value);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    document.getElementById("submitError").textContent = "Form requires first name and last name";
  }  
});


// rest operator
// const add2 = function(x, ...a) { //only rest operator on the last one.
//     return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);
// console.log(result); // the return function being called back into the variable, result

//arrow function
const add2 = a => 2 + a; //doesnt need parenthesis when its a single varable; if more, needs parenthesis'

const result = add2(100);
console.log(result);

// //IFFE
// const a = 3;
// (function(a) {
//     console.log(a)
// }) (a);

// (function() {
//     console.log("isnide the IFFE")
// }) ();

