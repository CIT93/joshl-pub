export const OUTPUT = document.getElementById("output");
export const FORM = document.getElementById("form");
export const TBL = document.getElementById("tab-data");

// Reasons as to why I kept these:
// I wanted to have the value, for example playerCount, present so I can refer to it inside of the table creation.
// I tried reformatting these to: FORM.playerCount.value (as well as for the others) but it just breaks my code, i dont understand why.
export const playerC = document.getElementById("playerCount")
export const gameType = document.getElementById("gameType")
export const currentDay = document.getElementById("currentDay")
export const currentEnjoymentLevel = document.getElementById("currentEnjoymentLevel")
export const SUBMIT = document.getElementById("submitError");

export const weekdayList = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
export const weekendList = ["Saturday", "Sunday"];
export const games = [
    // board games on weekday
    {name: "Checkers", playerCount: 2, gameType: "board game", weekType: "weekday", enjoymentLevel: 3},
    {name: "Uno", playerCount: 3, gameType: "board game", weekType: "weekday", enjoymentLevel: 4},
    {name: "Monopoly", playerCount: 4, gameType: "board game", weekType: "weekday", enjoymentLevel: 2},
    // pc games on weekday
    {name: "Fortnite duos", playerCount: 2, gameType: "pc game", weekType: "weekday", enjoymentLevel: 2},
    {name: "Fortnite trios", playerCount: 3, gameType: "pc game", weekType: "weekday", enjoymentLevel: 4},
    {name: "Fortnite squads", playerCount: 4, gameType: "pc game", weekType: "weekday", enjoymentLevel: 5},
    // board games on weekend 
    {name: "Checkers", playerCount: 2, gameType: "board game", weekType: "weekend", enjoymentLevel: 3},
    {name: "Uno", playerCount: 3, gameType: "board game", weekType: "weekend", enjoymentLevel: 4},
    {name: "Monopoly", playerCount: 4, gameType: "board game", weekType: "weekend", enjoymentLevel: 2},
    {name: "Avalon", playerCount: 5, gameType: "board game", weekType: "weekend", enjoymentLevel: 5},
    // pc games on weekeend 
    {name: "It Takes Two", playerCount: 2, gameType: "pc game", weekType: "weekend", enjoymentLevel: 5},
    {name: "Minecraft Survival", playerCount: 3, gameType: "pc game", weekType: "weekend", enjoymentLevel: 3},
    {name: "Minecraft Mini games", playerCount: 4, gameType: "pc game", weekType: "weekend", enjoymentLevel: 4},
    {name: "Valorant", playerCount: 5, gameType: "pc game", weekType: "weekend", enjoymentLevel: 4}
];

