export const numberAddition = (str) => {

    const strArr = str.split('');
    
    let arrNumber = [];

    for(let i=0; i<strArr.length; i++) {

        let lastIndex = arrNumber.length-1;

        if((/[^0-9]/).test(strArr[i])) {
            arrNumber.push(strArr[i]);
        }
        else {

            if(arrNumber.length === 0) {
                arrNumber.push(strArr[i]);
            }
            else if((/[0-9]/).test(arrNumber[lastIndex])) {
                arrNumber[lastIndex] = arrNumber[lastIndex] + strArr[i];
            }
            else if((/[^0-9]/).test(arrNumber[lastIndex])) {
                arrNumber.push(strArr[i]);
            }

        }

    }

    return calculateNumbers(arrNumber);

}

const calculateNumbers = (arr) => {
    
    let sum = 0;

    for(let j=0; j<arr.length; j++) {

        if(arr[j].match(/\d+/)) sum += parseInt(arr[j]);
        
    }

    return sum;

}