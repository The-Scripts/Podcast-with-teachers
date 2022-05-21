let articleDaysOfAMonth = document.getElementsByTagName("article")[1];
let aYearAndAMonth = document.getElementById("aYearAndAMonth");
let daysOfAMonth  = document.getElementById("daysOfAMonth");
let date = new Date();
let currentMonth = date.getMonth();
let namesOfMonths = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", 
    "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik",
    "Listopad, Grudzień"];
let currentYear = date.getFullYear();
let currentDay = date.getDate();
let currentDayOfAWeek = date.getDay();
let numberOfDaysInAMonth = [ 31, numberOfDaysInFebruary(date.getFullYear()), 31,
    30, 31, 30, 31, 31, 30, 31, 30, 31];

function numberOfDaysInFebruary(year) {
    let february;
    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
        february = 29;
    }
    else {
        february = 28;
    }
    return february;
}

if (currentDayOfAWeek > 0) {
    for (let i = 0; i < currentDayOfAWeek; i++) {
        let div = document.createElement("div");
        daysOfAMonth.appendChild(div);
    }
}

// creating day's divs
for (let i = 0; i < numberOfDaysInAMonth[currentMonth]; i++) {
    let div = document.createElement("div");
    let divText = document.createTextNode(i+1);
    div.appendChild(divText);
    daysOfAMonth.appendChild(div);
    div.id = "day" + (i + 1);
    div.className = "day";
    daysOfAMonth.appendChild(div);
}

// showing current month and year
aYearAndAMonth.textContent = namesOfMonths[currentMonth] + " " + currentYear;

var lastDayOfTheMonth = numberOfDaysInAMonth[currentMonth];

