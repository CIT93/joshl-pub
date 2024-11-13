// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

const output = document.getElementById("output");

const url = 'https://jsonplaceholder.typicode.com/users'

function title() {
    const h1 = document.createElement("h1");
    h1.textContent = `List of users from Jsonplaceholder:`;
    output.appendChild(h1);
}

async function getData() {
    try {
        const response = await fetch(url)
        const data = await response.json()

        if (response.status > 100) {
            console.log('success:', data)

            data.forEach(data => {
                console.log(`${data.name}`)
                const h2 = document.createElement("h2");
                h2.textContent = data.name;
                output.appendChild(h2);
            });

        } else {
            console.log('server error')
        }

    } catch (error) {
        console.log('catch error', error.message)
    }

}

title();
getData();

