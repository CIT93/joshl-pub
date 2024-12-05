// Form stuff for global.js
import { OUTPUT, FORM, TBL, playerC, gameType, currentDay, currentEnjoymentLevel, SUBMIT, weekdayList, weekendList, games} from "./global.js";
// import {determineWeek, determineGame, start } from "./determine.js"
// im keeping the above import commented in to show that my previous functions are no longer needed due to the class integration
import { renderTbl, renderTblHeading } from "./render.js";
import { saveLS, gameNightData, getLS} from "./storage.js"
import { GN } from "./classes.js";

//im making it load so it loads previous data from local storage:
renderTbl(gameNightData);

// field error stuff for custom validation:
const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);
  
    if (field === "") {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = "";
        event.target.classList.remove('invalid');
    }
  };

  // red boxes on errors
playerC.addEventListener('blur', validateField);
currentEnjoymentLevel.addEventListener('blur', validateField);

FORM.addEventListener("submit", e => {
    e.preventDefault();
    if (playerC.value !== '' && gameType .value !== '') {
        SUBMIT.textContent = '';
        // start(playerC.value,gameType.value,currentDay.value,currentEnjoymentLevel.value); //input from form DONE
        
        const GNObj = new GN(playerC.value,gameType.value,currentDay.value,currentEnjoymentLevel.value);
        // GNObj.determineWeek();
        // GNObj.determineGame();
        gameNightData.push(GNObj);
        console.log(
    `The user selected:
    player count: ${playerC.value}
    game type: ${gameType.value}
    day of the week: ${currentDay.value}
    mood level (out of 5): ${currentEnjoymentLevel.value}`)
    
    saveLS(gameNightData);
    renderTbl(gameNightData);
    FORM.reset();
    } else { 
        FORM.submitError.value = "Requires proper player count & mood level"
    }
})

