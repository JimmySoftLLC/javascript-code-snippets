// Write some code in any programming language for the following situation: 
// A User has the following properties: Email Address, First Name, Last Name, 
// Registration Date. It also has a Save method. 
// Admin users are exactly like regular Users, but can only be saved when the 
// email address ends with “@fool.com”.

function user(email, first, last, registrationDate, admin) {
    this.email = email;
    this.firstName = first;
    this.lastName = last;
    this.registrationDate = registrationDate;
    this.admin = admin
}

let myMockUserDataBaseArray = []

let myNewUser1 = new user("JDoe@anywhere.com", "John", "Doe", "2020-02-28", true);

let myNewUser2 = new user("admin1@fool.com", "admin1", "user", "2020-02-28", true);

let myNewUser3 = new user("admin2@fool.com", "admin2", "user", "2020-02-28", false);

function saveUser(myUser) {
    if (!myUser.admin) {
        myMockUserDataBaseArray.push(myUser)
        return true;
    }
    if (myUser.email.indexOf("@fool.com", 0) != -1 && myUser.admin) {
        myMockUserDataBaseArray.push(myUser)
        return true;
    } else {
        return false;
    }
}

console.log(saveUser(myNewUser1))
console.log(saveUser(myNewUser2))
console.log(saveUser(myNewUser3))
console.log(myMockUserDataBaseArray)
