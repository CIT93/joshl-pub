class FP {
  constructor(firstName, lastName, houseMembers, houseSize, foodChoice) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.houseHoldPoints();
    this.houseSizePoints();
    this.foodChoicePoints();
    this.total();
  }
  houseSizePoints() {
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
  houseHoldPoints() {
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

  foodChoicePoints() {
    if (this.foodChoice === "domestic meat daily") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "domenstic meet sometimes") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "vegan or wild meat") {
      this.foodChoicePoints = 2;
    } else if (this.foodChoice === "prepackaged") {
      this.foodChoicePoints = 12;
    } else if (this.foodChoice === "balanced") {
      this.foodChoicePoints = 6;
    } else if (this.foodChoice === "fresh") {
      this.foodChoicePoints = 2;
    }
  }
  total() {
    this.total =
      this.houseHoldPoints + this.houseSizePoints + this.foodChoicePoints;
  }
}

export { FP };
