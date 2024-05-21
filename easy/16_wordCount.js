export const wordCount = (str) => {

    const arr = str.toLowerCase().split('');
    let letterSum = 0;

    arr.forEach((letter) => {

        if((/[bcdfghjklmnpqrstvwxyz]/).test(letter)) {
            letterSum += 1;
        }

    });

    return letterSum;

}