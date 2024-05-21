export const arrayAddition = (arr) => {

    //^ Yol 1
    // const newArr = [...arr];

    // let maxNumber = Math.max(...arr);

    // let sum = 0;

    // for(let i=0; i<newArr.length; i++) {
    //     sum += newArr[i];
    // }

    // return sum / 2 === maxNumber ? true : false;

    //^ Yol 2
    // const newArr = [...arr];
    
    // let maxNumber = Math.max(...arr);
    
    // let newArr2 = newArr.splice(arr.indexOf(maxNumber), 1);

    // let sum = 0;

    // for(let i=0; i<newArr.length; i++) {
    //     sum += newArr[i];
    // }

    // return sum == newArr2 ? true : false;

    //^ Yol 3
    const newArr = [...arr];

    let newArr2 = newArr.sort((a, b) => a - b);

    let maxNumber = newArr2.splice(newArr2.length - 1, 1);

    //* let maxNumber = newArr2.slice(-1)   <=== Bunu anlamadim.

    //* console.log(maxNumber);

    let sum = 0;

    for(let i=0; i<newArr.length; i++) {

        sum += newArr[i];
        
    }

    return maxNumber == sum ? true : false;

};