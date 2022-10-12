// first format
setInterval(()=>
{
    let d_1 = new Date();
    date_format1.innerHTML = d_1;
}, 1000)        

//second format
let date = new Date();
let options = {
    weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit"
};
let d_2 = date.toLocaleTimeString("en-us", options);
date_format2.innerHTML = d_2;

//third format
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var a = new Date();
var day = days[a.getDay()];
var hr = a.getHours();
var min = a.getMinutes();
if (min < 10) 
{
    min = "0" + min;
}
var ampm = "am";
if( hr > 12 ) 
{
    hr -= 12;
    ampm = "pm";
}
var date_3 = a.getDate();
var month = months[a.getMonth()];
var year = a.getFullYear();
var x = document.getElementById("date_format3");
x.innerHTML = day + " " + hr + ":" + min + ampm + " " + date_3 + " " + month + " " + year;        