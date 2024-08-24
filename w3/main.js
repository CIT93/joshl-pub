function determineHouseHoldPts(numberInHousehold) {
  console.log("Inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else if (numberInHousehold > 6) {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  } else {
    console.log("no update to points");
  }
  console.log(
    `Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;

//const numberInHousehold = 3;

//global scope

determineHouseHoldPts(3);
determineHouseHoldPts(4);

//CF HOUSEHOLD AND FUNCTIONS:
//Consider the size of your home
//If you have a large house, then add 10 points to your score.
//If you have a medium-sized house, then add 7 points.
//If you have a small house, then add 4 points.
//If you live in an apartment, then add 2 points.

function determineHouseSizePts(houseSize) {
 console.log("Inside HouseSize Function");
   switch (houseSize) {
       case "large":
           carbonFootprintPoints = carbonFootprintPoints + 10;
           console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
           break;
       case "medium":
           carbonFootprintPoints = carbonFootprintPoints + 7;
          console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
           break;
       case "small":
           carbonFootprintPoints = carbonFootprintPoints + 4;
           console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
           break;
       case "apartment":
           carbonFootprintPoints = carbonFootprintPoints + 2;
         console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
            break;
           default:
             console.log("no update to points from house size");
    }
}
determineHouseSizePts("large")
