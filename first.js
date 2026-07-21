setInterval(() => {
    date = new Date();
    hourtime = date.getHours();
    minutetime = date.getMinutes();
    secondtime = date.getSeconds();
    hourRotation = 30 * hourtime + minutetime / 2;
    minuteRotation = 6 * minutetime;
    secondRotation = 6 * secondtime;

    hour.style.transform = `rotate(${hourRotation}deg)`
    minute.style.transform = `rotate(${minuteRotation}deg)`
    second.style.transform = `rotate(${secondRotation}deg)`

}, 1000);