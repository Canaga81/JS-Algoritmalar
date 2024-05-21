export const simpleSymbols = (str) => {

    const arr = str.split('');

    let arrBase = [];
    
    arr.forEach((item) => {

        if((/[a-zA-Z]/).test(item)) {

            if(arr[arr.indexOf(item) - 1] === "+" && arr[arr.indexOf(item) + 1] === "+") {
                arrBase.push(1);
            }
            else {
                arrBase.push(0);
            }

        }

    });

    return arrBase.includes(0) ? false : true;

}