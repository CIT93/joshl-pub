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

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll(`.recycle:checked`).length;
  return {
    glass: e.target.glass.checked,
    plastic: e.target.plastic.checked,
    paper: e.target.paper.checked,
    aluminum: e.target.aluminum.checked,
    steel: e.target.steel.checked,
    compositing: e.target.compositing.checked,
    recyclePoints: (24 - (numberChecked * 4))
  }
}


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
      parseInt(e.target.waste.value),
      determineRecycleItems(e),
      parseInt(e.target.personal.value),
      parseInt(e.target.publicTransportation.value),
      parseInt(e.target.flight.value),
    );
    cfpData.push(fpObj);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
    BOTH.disabled = false;
  } else {
    document.getElementById("submitError").textContent = "Form requires first name and last name";
  }  
});

WATER.addEventListener("change", e => {
  if(parseInt(WATER.value) === 0 ){
    BOTH.disabled = true;
  } else {
    BOTH.disabled = false;
  }
})