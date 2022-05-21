var articleDaysOfAMonth = document.getElementsByTagName("article")[1];
var aYearAndAMonth = document.getElementById("aYearAndAMonth");
var daysOfAMonth  = document.getElementById("daysOfAMonth");
var date = new Date();
var currentMonth = date.getMonth();
var namesOfMonths = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", 
    "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik",
    "Listopad, Grudzień"];
var currentYear = date.getFullYear();
var currentDay = date.getDate();
var numberOfDaysInAMonth = [ 31, numberOfDaysInFebruary(date.getFullYear()), 31,
    30, 31, 30, 31, 31, 30, 31, 30, 31];

function numberOfDaysInFebruary(year) {
    var february;
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
        february = 29;
    }
    else {
        february = 28;
    }
    return february;
}

// creating day's divs
for (let i = 0; i < numberOfDaysInAMonth[currentMonth]; i++) {
    var div = document.createElement("div");
    var divText = document.createTextNode(i+1);
    div.appendChild(divText);
    daysOfAMonth.appendChild(div);
    div.id = "day" + (i + 1);
    div.className = "day";
    daysOfAMonth.appendChild(div);
}

// showing current month and year
aYearAndAMonth.textContent = namesOfMonths[currentMonth] + " " + currentYear;

var lastDayOfTheMonth = numberOfDaysInAMonth[currentMonth];

