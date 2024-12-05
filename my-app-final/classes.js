import { weekdayList, weekendList, games } from "./global.js"

export class GN {
    constructor(playerCount, gameType, currentDay, currentEnjoymentLevel) {
        this.playerCount = playerCount
        this.gameType = gameType
        this.currentDay = currentDay
        this.currentEnjoymentLevel = currentEnjoymentLevel
        this.determineWeek()
        this.determineGame(playerCount, gameType, currentEnjoymentLevel)
        this.gameName();
        this.gameEnjoyment();
        this.enjoymentTotal();
    }
    determineWeek() {
        if(this.currentDay === "Monday" || this.currentDay === "Tuesday" || this.currentDay === "Wednesday" || this.currentDay ===  "Thursday" || this.currentDay ===  "Friday") {
            // console.log(`it is a weekday because it is ${this.currentDay}`);
            return this.newCurrentDay = "weekday";
        } else if(this.currentDay === "Saturday" || this.currentDay === "Sunday"){
            // console.log(`it is a weekend because it is ${currentDay}`); 
            return this.newCurrentDay = "weekend";
        } else {
            console.log(`you didnt put a correct day`)
        };
    }
    determineGame(playerCount, gameType, newCurrentDay, weekType, currentEnjoymentLevel) {
        if (this.newCurrentDay === "weekday") {
            for (const game of games) {
                if (game.playerCount == playerCount && game.gameType === gameType && game.weekType === "weekday") {
                    return this.game = game;
                    } // Exit the loop once a suitable game is found
            } 
        } else if (this.newCurrentDay === "weekend") {
            for (const game of games) {
                if (game.playerCount == playerCount && game.gameType === gameType && game.weekType === "weekend") {
                    return this.game = game;
                    ; // Exit the loop once a suitable game is found
                } 
            } 
        } 
    }
    gameName() {
        this.gameName = parseInt(this.game.name);
    }
    gameEnjoyment() {
        this.gameEnjoyment = parseInt(this.game.enjoymentLevel);
    }
    enjoymentTotal() {
        this.enjoymentTotal = parseInt(this.currentEnjoymentLevel) + parseInt(this.gameEnjoyment);
    }
}