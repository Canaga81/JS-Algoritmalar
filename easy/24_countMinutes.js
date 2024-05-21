export const countMinutes = (time) => {

    const times = time.split('-');

    let time1 = {};
    let time2 = {};

    time1.meridian = times[0].slice(-2);
    time1.hour = parseInt(times[0].split(':')[0]);
    time1.minute = parseInt(times[0].split(':')[1]);

    time2.meridian = times[1].slice(-2);
    time2.hour = parseInt(times[1].split(':')[0]);
    time2.minute = parseInt(times[1].split(':')[1]);

    let minutes = 0;
    let result = 0;

    if(time1.meridian === time2.meridian) {
        minutes = ((time2.hour * 60) + time2.minute) - ((time1.hour * 60) + time1.minute);
        result = minutes > 0 ? minutes : minutes * 60 + minutes;
    }
    else {
        minutes = ((time2.hour * 60) + time2.minute) - ((time1.hour * 60) + time1.minute);
        result = 12 * 60 + minutes
    }

    const hour = Math.floor(result / 60);
    const minuteHour = Math.floor(result % 60);

    return hour + " saat" + " " + minuteHour + " deqiqe";

}



























// const times = time.split("-");

// let time1 = {};
// let time2 = {};

// time1.meridian = times[0].slice(-2);
// time1.hour = parseInt(times[0].split(':')[0]);
// time1.minute = parseInt(times[0].split(':')[1]);

// time2.meridian = times[1].slice(-2);
// time2.hour = parseInt(times[1].split(':')[0]);
// time2.minute = parseInt(times[1].split(':')[1]);

// let minutes = 0;
// let result = 0;

// if(time1.meridian === time2.meridian) {

//     minutes = (time2.hour * 60 + time2.minute) - (time1.hour * 60 + time1.minute);
//     result = minutes > 0 ? minutes : 24 * 60 + minutes;

// }
// else {

//     minutes = (time2.hour * 60 + time2.minute) - (time1.hour * 60 + time1.minute);
//     result = 12 * 60 + minutes;

// }

// return result;