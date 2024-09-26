import { renderTbl} from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts} from "./determinePointsFunction.js";
const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];




function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    // notes so i dont get confused:
    // houseM: houseHoldMembers
    // (html name): (js variable)
    firstname: firstName,
    lastname: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value); // I had to look at external sources on how to transfer a string data type to become an int. data type
  const houseSize = FORM.houses.value;
  
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = ""; //clears the prexisting information
  renderTbl(cfpData);
  cfpData.splice(0); //This removes previous entry to paste new information, This theoritcally works but this is for sure not how its supposed to work for this assignment.
  FORM.reset();
  // console.log(FORM.firstname.value); //removes the data here
  
})

// DONE step 1: create new module for functions for carbon footprint code
// DONE step 2: see if u can fix the heading showing up when user completes for more than once
// DONE step 3: update the render to output the user input
// DONE step 4: you will need to consider about how and where you update append or appendChild the tr
// full points: render output to include first name and foot print




// step 1: Works i think, it calculates the data so im pretty sure it works
// What i tried doing:
// - i made a new module and linked it via export / import but my cfpData will not read for some reason.

//Step 2: got it to work!
// What i tried doing:
// create the original table with name,household,size,footprint that way it doesnt get constantly duplicated in each submit attempt
// got it to work, its  no longer duplicated

//Step 3: Works but definetley not how we're supposed to do it.
// What i tried doing:
// - i got the array of data to stay but only for the first entry
// - i called it using: cfpData[0].houseM (change houseM to variables needed);
// i gotta figure out a way to make it ->
// I continued using it to call for cfpData[0].information we need.  in doing so, i just made it remove the previous cfpData[0] slot for each attempt and it worked.  This isnt how its supposed to work though, i feel like theres a better solution.

//Step 4: i think it works?
// i moved a lot of the trs and stuff in step 2 so im pretty sure i did this already?

//step 5: everything renders to the website so im pretty sure it works.