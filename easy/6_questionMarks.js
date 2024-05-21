export const questionMarks = (str) => {

    if(str.length < 5) {
        return false;
    }

    const arr = str.replace(/[^1-9?]/g, "").split('');

    let sums = [];
    let sum = 0;
    let iterator = 0;
    
    arr.forEach((item) => {

        if(item !== '?') {

            sum = parseInt(item) + parseInt(arr[iterator + 4]);
            sums.push(sum);

        }

        iterator++;

    });

    return sums.includes(10) ? true : false
   
}