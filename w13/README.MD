Promises from code along:

function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        reject('bad data')
        }, 100);
    })
}

function fun2() {
    console.log(`function 2`)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('🤑')
        }, 100);
    })
}

function onSuccess(data) {
    console.log(`Success: ${data}`)
}

function onError(errorCode) {
    console.log(`Error: ${errorCode}`)
}

function onFinally() {
    console.log(`Finally we're done`)
}

fun1()
    .then(fun2, onError)
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally)