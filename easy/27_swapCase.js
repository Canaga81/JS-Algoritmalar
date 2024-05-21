export const swapCase = (str) => {

    let newArr = [];

    const arr = str.split('');


    arr.forEach((item) => {

        if((/[^a-zA-Z]/).test(item)) {
            newArr.push(item);
        }
        else if((/[a-z]/).test(item)) {
            newArr.push(item.toUpperCase());
        }
        else if((/[A-Z]/).test(item)) {
            newArr.push(item.toLowerCase());
        }

    });

    return newArr.join('');

}