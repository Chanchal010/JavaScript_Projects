setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();
    hourRotation =  30*hTime + mTime/2;
    minuteRotation = 6*mTime;
    secondRotation = 6*sTime;

    hour.style.transform = `rotate(${hourRotation}deg)`
    minute.style.transform = `rotate(${minuteRotation}deg)`
    second.style.transform = `rotate(${secondRotation}deg)`
}, 1000);