export const timeConvert = (num) => {

    const minutes = num % 60;
    const hour = Math.floor(num / 60);
    return hour + ':' + minutes

}