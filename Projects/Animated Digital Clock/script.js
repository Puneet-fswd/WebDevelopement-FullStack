//declaring the required variables
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let ampm = document.getElementById('ampm');

//main program logic
setInterval(()=>
{
    //setting variables which are going to get updated in a regular interval
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //setting am-pm
    if(hrs>12)
    {
        hrs = hrs-12;
    }
    if(hrs<10)
    {
        hrs = 0+hrs;
    }
    if(min<10)
    {
        min = 0+min;
    }
    if(sec<10)
    {
        sec = 0+sec;
    }
    if(hrs == 0)
    {
        hrs = 12;
    }
    if(hrs<12)
    {
        ampm.innerHTML = "PM";
    }
    else
    {
        ampm.innerHTML = "AM";
    }

    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
}, 1000);