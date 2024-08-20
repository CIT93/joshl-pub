// How to Calculate your Carbon Footprint - https://www.wikihow.com/Calculate-Your-Carbon-Footprint
// Method 1:

// 1. Count the members of your household.
const myHouseMembers = 8; //I share my household with 4 people total
// 2. Consider the size of your home.
const myHouseSize = 7; //medium-sized house
// 3. Evaluate your food choices.
const myFoodChoices = 16; //domestic meat on daily basis (10) + good balance (6)
// 4. Examine your water consumption
const myWaterConsumption = 2; //washing machine 4-9 times, we don't use diswasher
// 5. Determine how many household purchases you make each year.
const myHouseholdPurchases = 8; //5-7 items per year
// 6. Consider how much waste you produce.
const myWasteProduced = 40; //fill 3 garbage cans each week
// 7. Identify the amount of waste that you recycle.
const myRecycle = 8; //24-4(glass)-4(plastic)-4(paper)-4(food waste)
// 8. Tally up your annual transportation scores.
const myTransportationScore = 10; //4(personal vehicle usage) + 0(public) + +6(flights)
// 9. Add up all your points.
const cfpTotal = myHouseMembers + myHouseSize + myFoodChoices + myWaterConsumption + myHouseholdPurchases + myWasteProduced + myRecycle + myTransportationScore;
// 10. Write JS to update the rendered html (index.html) with total footprint
//Heading 1 text -> html file (text: my total is:)
const myHeading1 = document.querySelector("h1");
myHeading1.textContent = "my total is: "; //i think this is assigning the string of text as myHeading1 variable, displaying it onto the index html
//Heading 2 text -> html file (cfpTotal variable after math)
const myHeading2 = document.querySelector("h2");
myHeading2.textContent = cfpTotal; //i think this is assigning cfp variable as myHeading2 variable, displaying it onto the index html


//end of code