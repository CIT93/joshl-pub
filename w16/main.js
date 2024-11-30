import { renderTbl } from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT, BOTH, WATER} from "./global.js";
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
    const fpObj = new FP(
      FNAME.value,
      LNAME.value,
      parseInt(e.target.housem.value),
      e.target.houses.value,
      e.target.foodc.value,
      e.target.foodSource.value,
      parseInt(e.target.water.value),
      e.target.dish_washer.checked ? parseInt(e.target.water.value) * 2 : parseInt(e.target.water.value),
      e.target.dish_washer.checked,
      parseInt(e.target.purchases.value),
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    document.getElementById("submitError").textContent = "Form requires first name and last name";
  }  
});

WATER.addEventListener("change", e => {
  if(parseInt(WATER.value) === 0 ){
    BOTH.disabled = true;
  }
})