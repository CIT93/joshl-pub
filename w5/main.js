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

//Original function:
//function start(houseHoldMembers, houseSize) {
//  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//  const houseSizePTS = determineHouseSizePts(houseSize);
//  const total = houseHoldPTS + houseSizePTS;
//make all of these into an object that could be refered to
//  cfpData.push([
//    houseHoldMembers,
//    houseSize,
//    houseHoldPTS,
//    houseSizePTS,
//    total,
//  ]);
//}

//My code from coding challenge:
//function start(houseHoldMembers, houseSize) {
//  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//  const houseSizePTS = determineHouseSizePts(houseSize);
//  const total = houseHoldPTS + houseSizePTS;
//  const cfpObj = {
//    houseMembers: houseHoldMembers,
//    houseSize: houseSize,
//    houseMemberPTS: houseHoldPTS,
//    houseSizePTS: houseSizePTS,
//    cfpTotal: total,
//    displayOut: function() {
//      console.log(cfpObj);
//    }
//  }
//  cfpObj.displayOut();
//}

//Lecture solution to coding challenge:

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
  output.appendChild(newH2);
  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on the number in and size of home`;
  output.appendChild(newH3);
  const newP = document.createElement("p");
  newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
  newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
  output.appendChild(newP);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });

}

function displayOutput() {
 for (obj of cfpData) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    output.appendChild(newH2);
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the number in and size of home`;
    output.appendChild(newH3);
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`;
    newP.textContent += `and a ${obj.houseS} size of home (score: ${obj.houseSPTS}).`;
    output.appendChild(newP);
}
}

//function displayOutput() {
//  for (let i = 0; i < cfpData.length; i++ ){
//    console.log(i);
//    const output = document.getElementById("output");
//    const newH2 = document.createElement("h2");
//    newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
//const newH3 = document.createElement("h3");
//newH3.textContent = `Based on the number in and size of home`;
//const newP = document.createElement("p");
// newP.textContent = `This number is based on the number of people in the house of ${cfpData[i][0]} (score: ${cfpData[i][3]}),`;
//newP.textContent += `and a ${cfpData[i][1]} size of home (score: ${cfpData[i][2]}).`;
//    output.appendChild(newH2);
// output.appendChild(newH3);
// output.appendChild(newP);
//  }
//}

//coding challenge refactor notes:
// i couldn't get it to properly work and I got totally stumpted.  This part i found pretty confusing so I will submit this as my coding challenge and rewrite it properly based on the code along video and i can get a better explaination and intent behind the proper code.
// during watching video:  I understand now, I didn't set the proper array spot after the [i], it makes sense now and you are right, it does look messy with a standard for loop!

start(2, "apt");
start(10, "large");
start(2, "small");
start(4, "medium");

displayOutput();
