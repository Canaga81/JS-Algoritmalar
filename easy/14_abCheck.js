export const abCheck = (str) => {
    
    const arr = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');

    let letterBase = [];

    arr.forEach((letter) => {
        if(letter === 'a' && arr[arr.indexOf(letter) + 4] === 'b') {
            letterBase.push(1);
        }
        else {
            letterBase.push(0);
        }
    });

    return letterBase.includes(1) ? true : false;

}