export const saveLS = gameNightData => {
    const serializedArr = JSON.stringify(gameNightData);
    localStorage.setItem("gameNight", serializedArr);
}

export const getLS = () => {
    const retrievedArr = localStorage.getItem("gameNight");
    if(retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
}

export const gameNightData = getLS();
