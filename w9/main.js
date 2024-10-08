import { renderTbl } from "./render.js";
import { determineHouseSizePts, determineHouseHoldPts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData, getLS} from "./storage.js";


function start(firstName, lastName, houseHoldMembers, houseSize) {
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

FORM.addEventListener("submit", function (e) {

  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;


  // testing from video:
  const errorFNElement = document.getElementById("firstnameError");
  const errorLNElement = document.getElementById("lastnameError");
    let messages1 = [];
    if (firstName === "" || firstName == null) {
        messages1.push("first name is requried");
    } else {
        messages1.push("");
    }

    if (messages1.length > 0 ) {
        e.preventDefault();
        errorFNElement.innerText = messages1.join(",")
    }

    let messages2 = [];
    if (lastName === "" || lastName == null) {
        messages2.push("last name is requried");
    } else {
        messages2.push("");
    }

    if (messages2.length > 0 ) {
        e.preventDefault();
        errorLNElement.innerText = messages2.join(",")
    }
    
  // testing from video:
if (firstName.length >= 1 && lastName.length >= 1) {
    start(firstName, lastName, houseHoldMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
} else {
    console.log("Please reread the prompt")
}

});

// push notes, pages arent updating for some reason so repushing.  Its not fixing
// the >= 1 line of code
// adding another line of code test