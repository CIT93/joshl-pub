class FP {
  constructor(
    firstName,
    lastName,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    waterConsumption
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumptionPoints = waterConsumption;
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();

    this.calTotal();
  }
  calHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apt") {
      this.houseSizePoints = 2;
    }
  }
  calHouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  calFoodChoicePoints() {
    if (this.foodChoice === "domestic meat daily") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "domenstic meat sometimes") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "vegan or wild meat") {
      this.foodChoicePoints = 2;
    }
  }

  calFoodSourcePoints() {
    if (this.foodSource === "prepackaged") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balanced") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "fresh") {
      this.foodSourcePoints = 2;
    }
  }


  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.waterConsumptionPoints; 
  }
}

export { FP };
