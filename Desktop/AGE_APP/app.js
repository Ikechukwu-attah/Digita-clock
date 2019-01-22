let check = () => {
    let enter = document.getElementById('button');
    let age = document.getElementById('ki').value;

    let days = 365;
    let day = age * days;
    let hours = days * 24 * age;
    let minutes = 1440 * 365 * age;
    let seconds = 86400 * days * age;





    let message = ['Wow, thank God', 'You must have achieved your life purpose', 'Thank God, you can stil enjoy your life while you can', 'Thank God, you must be a grand father', 'You are not yet born', 'Please input your age']

    let count;

    if (age > 0 && age <= 21) {
        count = 0;
    }


    if (age > 21 && age <= 40) {
        count = 1
    }

    if (age > 40 && age <= 60) {
        count = 2;
    }

    if (age > 60 && age <= 100) {
        count = 3;
    }


    if (age = 0) {
        count = 4;
    }






    document.getElementById('result').style.visibility = 'visible';
    document.getElementById('output').innerHTML = `You have lived for ${day} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    document.getElementById('give').innerHTML = message[count];

}


let clear = document.getElementById('try');
clear.addEventListener('click', () => {
    let fix = document.getElementById('ki');
    fix.value = '';

    document.getElementById('result').style.visibility = 'hidden';


})