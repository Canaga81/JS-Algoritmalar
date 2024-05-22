export const ScaleBalancing2 = (arr) => {

    const [l, r] = returnNumerals(arr[0]);
    
    const otherNumbers = returnNumerals(arr[1]);
    otherNumbers.sort((a, b) => a-b);

    const difference = Math.abs(l-r);

    //^ Senaryo 1 => Eger ferq arrayin icindeki reqeme beraberdirse.
    if(otherNumbers.indexOf(difference) > -1) return difference;

    //^ Senaryo 2 => Eger ferq arrayin icindeki secilmis reqemlerin cemine beraberdirse.
    let left = 0;
    let right = otherNumbers.length - 1;
    let result = "";
    let count = 1;

    while(left < right && count > 0) {

        let sum = otherNumbers[left] + otherNumbers[right];

        if(sum > difference) {
            right--;
        }
        else if (sum < difference) {
            left++;
        }
        else {

            result = otherNumbers[left] + "," + otherNumbers[right];
            count--;

        }

    }

    if(result != '') return result;

    //^ Senaryo 2 => Eger ferq arrayin icindeki secilmis reqemlerin ferqine beraberdirse.
    for(let i=otherNumbers.length-1; i>0; i--) {
        
        for(let j=0; j<i; j++) {

            if(otherNumbers[i] - otherNumbers[j] === difference) {
                result = otherNumbers[i] + "," + otherNumbers[j];
            }
            
        }

    }

    if(result != '') {
        return result;
    }
    else {
        return "Not Possible";
    }

}

const returnNumerals = (str) => {

    const numerals = [];

    str.match(/\d+/g).forEach((item) => {
        numerals.push(Number(item));
    });

    return numerals;

}