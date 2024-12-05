// No longer useful, everything was reformatted into class so i no longer imported this to main.js
// Kept this code in just to showcase it worked previous but no longer needed, will delete eventually.
import { playerC, gameType, currentDay, currentEnjoymentLevel, SUBMIT, weekdayList, weekendList, games} from "./global.js";
import { renderTbl } from "./render.js";
import { gameNightData } from "./storage.js";

export function determineWeek(currentDay = '',) {
    let newCurrentDay = "not updated";
    if(currentDay === "Monday" || currentDay === "Tuesday" || currentDay === "Wednesday" || currentDay ===  "Thursday" || currentDay ===  "Friday") {
        // console.log(`it is a weekday because it is ${currentDay}`);
        return newCurrentDay = "weekday";
    } else if(currentDay === "Saturday" || currentDay === "Sunday"){
        // console.log(`it is a weekend because it is ${currentDay}`); 
        return newCurrentDay = "weekend";
    } else {
        console.log(`you didnt put a correct day`)
    };
};

// function to determine which game to play based on argument / perimeters below:
export function determineGame(playerCount, gameType, newCurrentDay, weekType, currentEnjoymentLevel) {
    if (newCurrentDay === "weekday") {
        for (const game of games) {
            if (game.playerCount == playerCount && game.gameType === gameType && game.weekType === "weekday") {
                return game;
                } // Exit the loop once a suitable game is found
        } 
    } else if (newCurrentDay === "weekend") {
        for (const game of games) {
            if (game.playerCount == playerCount && game.gameType === gameType && game.weekType === "weekend") {
                return game;
                ; // Exit the loop once a suitable game is found
            } 
        } 
    } 
}

export function start(playerCount,gameType,currentDay,currentEnjoymentLevel, newCurrentDay) {
    const weekType = determineWeek(currentDay);
    const game = determineGame(playerCount, gameType, weekType, currentEnjoymentLevel);
    const total = parseInt(currentEnjoymentLevel) + parseInt(game.enjoymentLevel);
    gameNightData.push({
        playerCount: playerCount, 
        gameType: gameType, 
        currentDay: currentDay, 
        weekType: weekType,
        currentEnjoymentLevel: currentEnjoymentLevel,
        gameEnjoyment: game.enjoymentLevel,
        game: game.name,
        enjoymentTotal: total,
    });
    console.log(gameNightData);
    // gameNightData.splice(0); console now logs all data, had to do this for render to work.
}