export const secondGreatLow = (arr) => {

    let newArr = [];

    arr.forEach((number) => {

        !newArr.includes(number) && newArr.push(number);

    });

    const firstNum = newArr.slice(1, 2);
    const endNum = newArr.slice(-1);

    return arr.length > 2 ? firstNum + ", " + endNum : newArr.toString();

}