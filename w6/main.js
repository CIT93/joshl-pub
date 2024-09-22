const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  } else {
    console.log("no update to points");
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  } else {
    console.log("no update to points");
  }
  return houseHoldPoints;
}

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

function displayOutput() {

    for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the number in and size of home for ${obj.firstname} ${obj.lastname}`;   
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
    newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
    // const newH4 = document.createElement("h4");
    // newH4.textContent = `First Name: ${obj.firstname}`;
    // const newH5 = document.createElement("h4");
    // newH5.textContent = `Last Name: ${obj.lastname}`;

    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
    // OUTPUT.appendChild(newH4);
    // OUTPUT.appendChild(newH5);
}
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value); // I had to look at external sources on how to transfer a string data type to become an int. data type
  const houseSize = FORM.houses.value;
  
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = ""; //clears the prexisting information
  displayOutput();
  FORM.reset();
})
