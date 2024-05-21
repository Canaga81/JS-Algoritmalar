export const superIncreasing = (arr) => {

    for(let i=1; i<arr.length; i++) {

        let sum = sumOfSubset(arr, i);
        
        if(sum >= arr[i]) return false;
        
    }

    return true;

}

const sumOfSubset = (arr, index) => {

    let sum = 0;

    for(let c=0; c<index; c++) {
        sum += arr[c];
    }

    return sum;

}