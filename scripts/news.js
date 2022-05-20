var articleDaysOfAMonth = document.getElementsByTagName("article")[1];
var aYearAndAMonth = document.getElementById("aYearAndAMonth");

var date = new Date();
var currentMonth = date.getMonth();
var namesOfMonths = [
    "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", 
    "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik",
    "Listopad, Grudzień"];
var currentYear = date.getFullYear();

// showing current month and year
aYearAndAMonth.textContent = namesOfMonths[currentMonth] + " " +currentYear;