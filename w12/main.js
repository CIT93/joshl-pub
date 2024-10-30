const form = document.getElementById("form");

const h1 = document.createElement("h1");
h1.textContent = `Lets workout!`;
output.appendChild(h1);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const exercise = document.getElementById("exerciseType").value;
    const reps = document.getElementById("reps").value;
    const time = document.getElementById("time").value;
    
    //Async timeout code:
    endMessage(exercise);
    anotherSet();
    //Start Message to display to DOM & Console:
    startMessage(exercise, reps, time);
    console.log(`your exercise is: ${exercise} for ${reps} reps for ${time} minutes.`);
    form.reset();
})

function startMessage(exercise, reps, time) {
  console.log(`Start your workout!`);
  const h1 = document.createElement("h1");
  h1.textContent = `Starting your workout: ${exercise} for ${reps} reps for ${time} minutes.`;
  output.appendChild(h1);
}

function endMessage(exercise) {
    setTimeout(() => {
        const endMessage = `Finished! You can stop your ${exercise} workout now!`
        const h1 = document.createElement("h1");
        h1.textContent = `Finished! You can stop your ${exercise} workout now!`;
        output.appendChild(h1);
        console.log(endMessage)
    }, 2000);
}

function anotherSet() {
    setTimeout(() => {
        const message = `Ready for another set?`
        const h1 = document.createElement("h1");
        h1.textContent = `Ready for another set?`;
        output.appendChild(h1);
        const h2 = document.createElement("h2");
        h2.textContent = `----------------------------------------`;
        output.appendChild(h2);
        console.log(message)
    }, 3000);
}
