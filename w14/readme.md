// const url = 'https://worldtimeapi.org/api/timezone/America/New_York'

// async function getData() {
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
//     console.log(`New York's timezone is ${data.abbreviation}`)
// }

// getData();

//spotify example that wont work:

// const url = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE8'

// async function getData() {
//     const request = new Request(url, {
//         headers: {
//             'Authorization' : 'Bearer then the authorization key that got blurred in the video'
//         }
//     })
//     const response = await fetch(request)
//     const data = await response.json()
//     console.log(data)
// }

// getData();

//Try Catch Code Along:

const url = 'https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE8'

const request = new Request(url, {
    headers: {
        'Authorization' : 'Bearer then the authorization key that got blurred in the video'
    }
})

async function getData() {
    try {
        const response = await fetch(request)
        const data = await response.json()

        if (response.status !== 200) {
            console.log('succes', data)
        } else {
            console.log('server error', data.error.message)
        }

    } catch (error) {
        console.log('catch error', error)
    }

}

getData();

