let showTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);

    hours = checkTime(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);


    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

let convertFormat = (time) => { //TO DETERMINE PM AND AM
    let format = 'AM';
    if (time >= 12) {
        format = 'PM';
    }

    return format;
}


let addZero = (time) => { // ADDING ZERO INFRONT OF HOURS SECONDS AND MINUTES WHEN IT IS LESS THAN 10
    if (time < 10) {
        time = '0' + time;
    }
    return time

}

let checkTime = (time) => { // CHECKING TIME: THIS WILL MAKE THE TIME NOT TO BE GRATER 12,THATS IS COUNTING 13, INSTEAD OF 1
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }

    return time;
}

setInterval(showTime, 1000);