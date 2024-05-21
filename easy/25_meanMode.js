export const meanMode = (arr) => {
  
    const mean = calculateMean(arr);
    const mode = calculateMode(arr);

    return mean === mode ? 1 : -1;

};

const calculateMean = (arr) => {

    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;

}

const calculateMode = (arr) => {
    
    let obj = [];

    for(let j=0; j<arr.length; j++) {
        arr[j] in obj ? obj[arr[j]] += 1 : obj[arr[j]] = 1;
    }
    
    let max = Math.max(...Object.values(obj))

    return iterateObjValue(max, obj);

}


const iterateObjValue = (max, obj) => {

    for(let j in obj) {
        if(obj[j] === max) {
            return parseInt(j);
        }
    }

}