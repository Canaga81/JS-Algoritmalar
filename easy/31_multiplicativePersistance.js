export const multiplicativePersistance = (num) => {

    if (num < 10) {
        return 0;
    }

    let multipleOfDigit = num;
    let steps = 0;

    while (multipleOfDigit >= 10) {
        multipleOfDigit = multiple(multipleOfDigit);
        steps++;
    }

    return steps + " --- " + multipleOfDigit;

}

const multiple = (n) => {

    let multiple = 1;
    const arrMultiple = n.toString().split('');

    for (let i = 0; i < arrMultiple.length; i++) {
        multiple *= parseInt(arrMultiple[i]);
    }

    return multiple;

}