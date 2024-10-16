// default function 1: done
const determineHouseSizePts = (size = "small") => {
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
  
  // default function 2: done
  const determineHouseHoldPts = (numberInHousehold = 4) => {
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
  
  export { determineHouseSizePts, determineHouseHoldPts };
  