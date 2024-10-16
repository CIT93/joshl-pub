import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import {saveLS, cfpData, getLS} from "./storage.js";

const start =  function(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

renderTbl(cfpData);

const validateField = function(event) {
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

FORM.addEventListener("submit", function (e) {
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


const add2 = function(...a) {
    return 2 + a[3];
}

const result = add2(1, 2, 3, 4);
console.log(result); // the return function being called back into the variable, result
// console.log(add2(1)); // using the function above, changing "a" into a new variable

// spread argument


//IFFE
const a = 3;
(function(a) {
    console.log(a)
}) (a);

(function() {
    console.log("isnide the IFFE")
}) ();