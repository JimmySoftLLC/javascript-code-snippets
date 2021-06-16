// simple promise
const myPromise = new Promise((resolve, reject) => {
    if (true === true) {
        resolve(true)
    }
    else {
        reject(false)
    }
})

myPromise.then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
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

myPromiseWithParam(true).then(function (result) {
    console.log(result)
}).catch((result) => {
    console.log(result)
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
myPromiseWithParam1(myBoolean).then(function (successResult1) {
    myPromiseWithParam2(successResult1).then(function (successResult2) {
        myPromiseWithParam3(successResult2).then(function (successResult3) {
            myPromiseWithParam4(successResult3).then(function (successResult4) {
                myPromiseWithParam5(successResult4).then(function (successResult5) {
                    myPromiseWithParam6(successResult5).then(function (successResult6) {
                        myPromiseWithParam7(successResult6).then(function (successResult7) {
                            console.log(successResult7)
                        }).catch((errorResult7) => {
                            console.log(errorResult7)
                        })
                    }).catch((errorResult6) => {
                        console.log(errorResult6)
                    })
                }).catch((errorResult5) => {
                    console.log(errorResult5)
                })
            }).catch((errorResult4) => {
                console.log(errorResult4)
            })
        }).catch((errorResult3) => {
            console.log(errorResult3)
        })
    }).catch((errorResult2) => {
        console.log(errorResult2)
    })
}).catch((errorResult1) => {
    console.log(errorResult1)
})

myPromiseWithParam1(myBoolean).then(function (successResult1) {
    return myPromiseWithParam2(successResult1)
}).then(function (successResult2) {
    return myPromiseWithParam3(successResult2)
}).then(function (successResult3) {
    return myPromiseWithParam4(successResult3)
}).then(function (successResult4) {
    return myPromiseWithParam5(successResult4)
}).then(function (successResult5) {
    return myPromiseWithParam6(successResult5)
}).then(function (successResult6) {
    return myPromiseWithParam7(successResult6)
}).then(function (successResult7) {
    console.log(successResult7)
}).catch((errorResult) => {
    console.log(errorResult)
})