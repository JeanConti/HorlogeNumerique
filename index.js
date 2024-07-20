function startTime() {
    var today = new Date();     // Date() sirve para fecha y hora
    var hr = today.getHours();    
    var min = today.getMinutes();
    var sec = today.getSeconds();
    
    // Formato hora
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;

    
    // Añade un zero delante de los números < 10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    
    //Elementos del reloj
        document.getElementById('clock').innerHTML = hr + " : " + min + " : " + sec + " " + ap;
    
        // Calendario
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()]; 
    var curDay = today.getDay();
    var curMonth = months[today.getMonth()];    
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay+" "+curMonth +" "+curYear;
    
    //Elementos calendario
    document.getElementById("date").innerHTML = date;
    var time = setTimeout(function(){startTime()}, 1000);
    
    console.log(paddedDate); // 2023-03-08T00:00:00.000Z
}
function fecha (date) {
    if (date < 10)
    date = date.toISOString().padStart(10, '0');
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
};
