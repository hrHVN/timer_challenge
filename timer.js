// In this challenge you have to create a timer from buttons that is selected(clicked) 
// the timer should then count backwards for the selected time.If 60 minutes are selected 
// then the timer should start with 60: 00(mm: ss) and count backwards 60: 59, 60: 57 60: 56 until 0. 
// There should be a calculation to indicate when the timer will stop.There is also a place where
//  a user can enter minutes.A separate timer.js file should be created for all the functions.

const timer = {
    // Eventlistener
    button: function () {
        $('button').click(function () {
            let btn = $(this).data('time');
            console.log(btn);

            // clearInterval(timer.countdown(-1));
            timer.countdown(btn);
            timer.endTime(btn);
        })
    },
    // Counter, counts down the spesifyed amount of seconds
    countdown: function (setT) {
        count = setInterval(function () {
            if ((setT < 0)) {
                clearInterval(count);
                return;
            }
            d = Number(setT);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);
            setT--;
            $('.display__time-left').html(`${m}:${s}`);
        }, 1000);
    },
    // Displays the clock at wich the timer finishes
    endTime: function (setT) {
        const now = new Date('December 31, 1975, 23:15:30 GMT+07:00');
        now.setSeconds(setT);

        let end = `${now.getMinutes}:${now.getSeconds}`;
        $('.display__end-time').html(`${now.getUTCHours()}:${now.getUTCMinutes()}:${now.getUTCSeconds()}`);
    }
}

$(document).ready(function () {
    timer.button();
})