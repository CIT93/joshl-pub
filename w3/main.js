function determineHouseSizePts(size) {
  if (size === "large") {
    carbonFootprintPoints = carbonFootprintPoints + 10
  } else if (size === "medium") {
    carbonFootprintPoints = carbonFootprintPoints + 7
  } else if (size === "small") {
    carbonFootprintPoints = carbonFootprintPoints + 4
  } else if (size === "apt") {
    carbonFootprintPoints = carbonFootprintPoints + 2
  }else {
    console.log("no update to points");
  }
  console.log(
    `Based on the number of house size of ${size} the points would be ${carbonFootprintPoints}.`);
}

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

//global scope

determineHouseHoldPts(5);
determineHouseSizePts("apt");

//Below is my code, im putting it as comments to follow the code along lecture
//function determineHouseSizePts(houseSize) {
// console.log("Inside HouseSize Function");
//   switch (houseSize) {
//       case "large":
//           carbonFootprintPoints = carbonFootprintPoints + 10;
//           console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
//           break;
//       case "medium":
//           carbonFootprintPoints = carbonFootprintPoints + 7;
//          console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
//           break;
//       case "small":
//           carbonFootprintPoints = carbonFootprintPoints + 4;
//           console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
//           break;
//       case "apartment":
//           carbonFootprintPoints = carbonFootprintPoints + 2;
//         console.log(`Based on the number of members of the household and your house size being ${houseSize}, the points would be ${carbonFootprintPoints}.`);
//            break;
//           default:
//             console.log("no update to points from house size");
//    }
//}
//determineHouseSizePts("large")
