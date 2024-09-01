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

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

function displayOutput() {
  for (arr of cfpData){
    console.log(arr);
    const output = document.getElementById("output");
    const newP1 = document.createElement("p");
    const newP2 = document.createElement("p");
    const newP3 = document.createElement("p");
    const newP4 = document.createElement("p");
    const newP5 = document.createElement("p");
    const newP6 = document.createElement("p");
    newP1.textContent = `Carbon Footprint total is ${arr[4]}`;
    newP2.textContent = `number of household members is ${arr[0]}`;
    newP3.textContent = `score of house members is ${arr[2]}`;
    newP4.textContent = `size of house is ${arr[1]}`;
    newP5.textContent = `score of size of house is ${arr[3]}`;
    newP6.textContent = "-"; // i just wanted to add a line break to separate each array entry
    output.appendChild(newP1);
    output.appendChild(newP2);
    output.appendChild(newP3);
    output.appendChild(newP4);
    output.appendChild(newP5);
    output.appendChild(newP6);
  }
}

start(5, "apt");
start(4, "large");
start(3, "medium");
//new entries after the code along:
start(8, "large");
start(1, "apt");
start(4, "medium");
start(3, "small");
start(6, "large");

displayOutput();

//took a break -> start on the last video when resuming hw