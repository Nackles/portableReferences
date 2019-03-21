// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOpFh-D_nf4ZEAspnrK_nn5gyIhMyX6xk",
    authDomain: "awesomebilling.firebaseapp.com",
    databaseURL: "https://awesomebilling.firebaseio.com",
    projectId: "awesomebilling",
    storageBucket: "",
    messagingSenderId: "370999565275"
};
firebase.initializeApp(config);

var database = firebase.database();
console.log(database);

$("#submit-button").on("click", function (event) {
    event.preventDefault();


    //VARIABLES from INPUTS
    var tempName = $("#name").val().trim();
    var tempRole = $("#role").val().trim();
    var tempDate = $("#date").val().trim();
    // var convertedDate = moment(), tempDate;
    var tempRate = $("#rate").val().trim();

    //variable doing math
    var totalBilled = "undefined lol";


    //make the server hold all that
    database.ref().push({
        name: tempName,
        role: tempRole,
        date: tempDate,
        rate: tempRate,
        bill: "lodesamonay"
    })

})

//runs on pageload + populates the table
database.ref().on("child_added", function (snapshot) {
    var childStorage = snapshot.val();

    //changing the html
    $("#name-table").append(childStorage.name + "<br>");
    $("#role-table").append(childStorage.role + "<br>");
    $("#date-table").append(childStorage.date + "<br>");
    $("#rate-table").append(childStorage.rate + "<br>");
    $("#bill-table").append(childStorage.bill + "<br>");


}, function (errorObject) {
    console.log("Thing that went sideways: " + errorObject.code);
})

