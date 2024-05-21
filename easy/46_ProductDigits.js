export const productDigits = (num) => {

    let multiplers = [];

    for(let i=1; i<=num; i++) {
        num % i === 0 && multiplers.push(i);
    }

    let medium = multiplers.length / 2;

    let numbers = [];
    if(multiplers[medium - 1] * multiplers[medium] === num) {
        numbers.push(multiplers[medium - 1].toString().length + multiplers[medium].toString().length);
    }

    console.log(multiplers);
    return numbers.toString();

}