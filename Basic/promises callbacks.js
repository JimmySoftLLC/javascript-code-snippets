// simple promise
const promiseSimple = new Promise((resolve, reject) => {
    if (true === true) {
        resolve(true)
    }
    else {
        reject(false)
    }
})

// promise with a parameter
const promiseWithParam = (myBoolean) => {
    return new Promise(function (resolve, reject) {
        if (myBoolean === true) {
            resolve(true)
        }
        else {
            reject(false)
        }
    });
}

// async promise with a parameter
const asyncPromiseWithParam = async (myBoolean) => {
    return new Promise(function (resolve, reject) {
        if (myBoolean === true) {
            resolve(true)
        }
        else {
            reject(false)
        }
    });
}

const promiseWithParam1 = promiseWithParam
const promiseWithParam2 = promiseWithParam
const promiseWithParam3 = promiseWithParam
const promiseWithParam4 = promiseWithParam
const promiseWithParam5 = promiseWithParam
const promiseWithParam6 = promiseWithParam
const promiseWithParam7 = promiseWithParam

const asyncPromiseWithParam1 = asyncPromiseWithParam
const asyncPromiseWithParam2 = asyncPromiseWithParam
const asyncPromiseWithParam3 = asyncPromiseWithParam
const asyncPromiseWithParam4 = asyncPromiseWithParam
const asyncPromiseWithParam5 = asyncPromiseWithParam
const asyncPromiseWithParam6 = asyncPromiseWithParam
const asyncPromiseWithParam7 = asyncPromiseWithParam

const myBoolean = false

//  now use the promises as follows ---------------------------------

// Simple
promiseSimple.then((result) => {
    console.log(result)
}).catch((result) => {
    console.log(result)
})

// promise with parameter
promiseWithParam(true).then(function (result) {
    console.log(result)
}).catch((result) => {
    console.log(result)
})

// nesting promises 
promiseWithParam1(myBoolean).then(function (successResult1) {
    promiseWithParam2(successResult1).then(function (successResult2) {
        promiseWithParam3(successResult2).then(function (successResult3) {
            promiseWithParam4(successResult3).then(function (successResult4) {
                promiseWithParam5(successResult4).then(function (successResult5) {
                    promiseWithParam6(successResult5).then(function (successResult6) {
                        promiseWithParam7(successResult6).then(function (successResult7) {
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

// flatten .thens
promiseWithParam1(myBoolean).then(function (successResult1) {
    return promiseWithParam2(successResult1)
}).then(function (successResult2) {
    return promiseWithParam3(successResult2)
}).then(function (successResult3) {
    return promiseWithParam4(successResult3)
}).then(function (successResult4) {
    return promiseWithParam5(successResult4)
}).then(function (successResult5) {
    return promiseWithParam6(successResult5)
}).then(function (successResult6) {
    return promiseWithParam7(successResult6)
}).then(function (successResult7) {
    console.log(successResult7)
}).catch((errorResult) => {
    console.log(errorResult)
})

// async await
const asyncFunction = async (myBoolean) => {
    try {
        const successResult1 = await asyncPromiseWithParam1(myBoolean)
        const successResult2 = await asyncPromiseWithParam2(successResult1)
        const successResult3 = await asyncPromiseWithParam3(successResult2)
        const successResult4 = await asyncPromiseWithParam4(successResult3)
        const successResult5 = await asyncPromiseWithParam5(successResult4)
        const successResult6 = await asyncPromiseWithParam6(successResult5)
        const successResult7 = await asyncPromiseWithParam7(successResult6)
        console.log(successResult7)
    } catch (errorResult) {
        console.log(errorResult)
    }
}

asyncFunction(myBoolean)