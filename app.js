var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var gethours = document.getElementById("hours");
var getminutes = document.getElementById("minutes");
var getseconds = document.getElementById("seconds");
var getmilliseconds = document.getElementById("milliseconds");
var interval;


function start() {
    interval = setInterval(function () {
        milliseconds++
        getmilliseconds.innerHTML = milliseconds
        if (milliseconds >= 100) {
            seconds++
            getseconds.innerHTML = seconds
            milliseconds = 0
        } else if (seconds >= 60) {
            minutes++
            getminutes.innerHTML = minutes
            seconds = 0
        } else if (minutes >= 60) {
            hours++
            gethours.innerHTML = hours
            minutes = 0
        }
    }, 10)
    document.getElementById("startbtn").disabled  = true
}

function stop() {
    clearInterval(interval)
    document.getElementById("startbtn").disabled = false
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("hours").innerHTML = hours + "0";
    document.getElementById("minutes").innerHTML = minutes + "0";
    document.getElementById("seconds").innerHTML = seconds + "0";
    document.getElementById("milliseconds").innerHTML = milliseconds + "0";
}