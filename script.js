const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');


let interval = null;
let total = 0;
let initialHour=0;
let initialMinute=0;
let initialSecond=0;

const timer = () =>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
    total--;

    if (total >= 0){
        let hr = Math.floor(total/3600);
        let mt = Math.floor((total/60) - (hr*60));
        let sc = total - ((hr*3600) + (mt*60));
        hour.value = hr;
        minute.value = mt;
        second.value = sc;

    }
    else{
        clearInterval(interval);
        disp.innerText = "Timer Over";

    }

};

start.addEventListener('click', ()=>{
    clearInterval(interval);
    initialHour = Number(hour.value);
    initialMinute = Number(minute.value);
    initialSecond = Number(second.value);
    total = initialHour*3600 + initialMinute*60 + initialSecond;
    interval = setInterval(timer, 1000);

    disp.innerText = "Timer Starts";

});

stop.addEventListener('click', ()=>{
    clearInterval(interval);
    
    disp.innerText = "Timer Stoped";
});

restart.addEventListener('click', ()=>{
    clearInterval(interval);
    hour.value = initialHour;
    minute.value = initialMinute;
    second.value = initialSecond;
    total = initialHour*3600 + initialMinute*60 + initialSecond;
    interval = setInterval(timer, 1000);

    disp.innerText = "Timer Restarted";
});

reset.addEventListener('click', ()=>{
    clearInterval(interval);

    hour.value = 0;
    minute.value = 0;
    second.value = 0;

    disp.innerText = "Timer Reseted"
});