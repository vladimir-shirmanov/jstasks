var timerHolder = document.getElementById("timer");
var dateHolder = document.getElementById("date");
setInterval(() => { 
    var date = new Date();
    dateHolder.innerText = date.toLocaleString("ru-Ru", { year: "numeric", month: "long", day: "numeric" });
    timerHolder.innerText = date.toLocaleTimeString();
}, 1000);