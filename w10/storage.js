

const saveLS = function(cfpData) {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArr);
}

// when i name this function, the code breaks and idk why, it should just be: but the code breaks for some reason...
// getLS = function() {
    // const retrievedArr = localStorage.getItem("cfp");
    // if(retrievedArr !== null)  {
    //     return JSON.parse(retrievedArr);
    // } else {
    //     return [];
    // }
// }

const getLS = function() {
    const retrievedArr = localStorage.getItem("cfp");
    if(retrievedArr !== null)  {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }

}

const cfpData = getLS();

export {cfpData, saveLS, getLS};
