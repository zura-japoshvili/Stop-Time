let content = document.getElementById("content");
let second = 00;
let minute = 00;
let hour = 00;
let currentSecond = document.getElementById("second");
let currentMinute = document.getElementById("minute");
let currentHour = document.getElementById("hour");
let interval;
let bg_inteval;

let bg_colors = [
    "#FF5333","#FF3300","#A2BC13","#AADD00","#EEB4B4","#CC3232","#800000","#F2473F","#A0522D","#FF6600"
];



function startTime(){
    interval = setInterval(countingTime, 1000);
    bg_inteval = setInterval(bg_change, 10000);
}

function stopTime(){
    clearInterval(interval);
    clearInterval(bg_inteval);
}
function resetTime(){
    clearInterval(interval);
    clearInterval(bg_inteval);
    content.style.backgroundColor = "#fdb124";

    second = "00";
    minute = "0";
    hour = "00";
    currentSecond.innerHTML = second;
    currentMinute.innerHTML = minute;
    currentHour.innerHTML = hour;
}
function countingTime(){
    second ++;
    if(second <= 59){
        if(second < 10){
            currentSecond.innerHTML = "0" +second;
        }else{
        currentSecond.innerHTML  = second;
        }
    }if(second == 60){
        second = 0;
        minute ++;
    }if(minute <= 59){
        if(minute <10){
            currentMinute.innerHTML = "0" +minute;
        }else{
        currentMinute.innerHTML = minute;
        }
    }if(minute == 60){
        minute = 0;
        hour ++;
        currentHour.innerHTML = hour +" H";
    }
}
function bg_change(){
    for(let i = 0;i <=bg_colors.length;i++){
        setTimeout(function () {
            content.style.backgroundColor = bg_colors[i];
            console.log(bg_colors[i]);   
        }, i*1000)
    }
}

