let isLoggedIn = true;
let role = "admin";

if (isLoggedIn === false) {
    console.log("Please log in");
}
else if (role === "admin") {
    console.log("Welcome, Admin");
}
else {
    console.log("Welcome, User");
}