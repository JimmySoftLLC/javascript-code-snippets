// simple promise
const myPromise = new Promise((resolve, reject) => {
    if (true === true) {
        resolve('Success')
    }
    else {
        reject('Failure')
    }
})

myPromise.then((message) => {
    // console.log(message)
}).catch((message) => {
    // console.log(message)
})

//promise with a parameter sent to it just wrap it with a function
const myPromiseWithParam = (myBoolean) => {
    return new Promise(function (resolve, reject) {
        if (myBoolean === true) {
            resolve(true)
        }
        else {
            reject(false)
        }
    });
}

myPromiseWithParam(true).then(function (message) {
    // console.log(message)
}).catch((message) => {
    // console.log(message)
})

const myPromiseWithParam1 = myPromiseWithParam
const myPromiseWithParam2 = myPromiseWithParam
const myPromiseWithParam3 = myPromiseWithParam
const myPromiseWithParam4 = myPromiseWithParam
const myPromiseWithParam5 = myPromiseWithParam
const myPromiseWithParam6 = myPromiseWithParam
const myPromiseWithParam7 = myPromiseWithParam

const myBoolean = true

// nesting promises 
myPromiseWithParam1(myBoolean).then(function (successMessage1) {
    myPromiseWithParam2(successMessage1).then(function (successMessage2) {
        myPromiseWithParam3(successMessage2).then(function (successMessage3) {
            myPromiseWithParam4(successMessage3).then(function (successMessage4) {
                myPromiseWithParam5(successMessage4).then(function (successMessage5) {
                    myPromiseWithParam6(successMessage5).then(function (successMessage6) {
                        myPromiseWithParam7(successMessage6).then(function (successMessage7) {
                            console.log(successMessage7)
                        }).catch((errorMessage7) => {
                            console.log(errorMessage7)
                        })
                    }).catch((errorMessage6) => {
                        console.log(errorMessage6)
                    })
                }).catch((errorMessage5) => {
                    console.log(errorMessage5)
                })
            }).catch((errorMessage4) => {
                console.log(errorMessage4)
            })
        }).catch((errorMessage3) => {
            console.log(errorMessage3)
        })
    }).catch((errorMessage2) => {
        console.log(errorMessage2)
    })
}).catch((errorMessage1) => {
    console.log(errorMessage1)
})

// myPromiseWithParam1(myBoolean).then(function (successMessage1) {
//     return myPromiseWithParam2(successMessage1)
// }).then(function (successMessage2) {
//     return myPromiseWithParam3(successMessage2)
// }).then(function (successMessage3) {
//     return myPromiseWithParam4(successMessage3)
// }).then(function (successMessage4) {
//     return myPromiseWithParam5(successMessage4)
// }).then(function (successMessage5) {
//     return myPromiseWithParam6(successMessage5)
// }).then(function (successMessage6) {
//     return myPromiseWithParam7(successMessage6)
// }).then(function (successMessage7) {
//     console.log(successMessage7)
// }).catch((errorMessage) => {
//     console.log(errorMessage)
// })