export const vowelCount = (str) => {

    const arr = str.split('');

    let vowelSum = 0;

    arr.forEach((letter) => {
        if((/[a|e|i|o|u|A|E|I|O|U]/).test(letter)) {
            vowelSum += 1;
        }
    })

    return vowelSum;

}