// Recursive Version
function countDown(num) {
    if (num <= 0) { //base case
        console.log("All done!");
        return; //this ends the recursion
    }
    console.log(num);
    num--;
    countDown(num);
}

countDown(3)

