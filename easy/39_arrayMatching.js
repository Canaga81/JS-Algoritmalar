export const arrayMatching = (arr) => {

    const arr_1 = arr[0].match(/[0-9]+/gi);
    const arr_2 = arr[1].match(/[0-9]+/gi);

    let longArr = "equel";
    if(arr_1.length > arr_2.length) longArr = "first";
    if(arr_1.length < arr_2.length) longArr = "second";

    let newArr = [];

    if(longArr === "equel") newArr = sumArrNum(arr_1, arr_2, arr_1.length);
    if(longArr === "first") newArr = sumArrNum(arr_1, arr_2, arr_2.length, "first");
    if(longArr === "second") newArr = sumArrNum(arr_1, arr_2, arr_1.length, "second");

    let result = newArr[0];

    for(let i=1; i<newArr.length; i++) {

        result = result + "-" + parseInt(newArr[i]);

    }

    return result;

}

const sumArrNum = (a, b, len, balance="equel") => {

    let arr = [];

    for(let i=0; i<len; i++) {

        arr.push(parseInt(a[i]) + parseInt(b[i]));

    }

    if(balance === "equel") return arr;
    if(balance === "first") return arr.concat(a.slice(-(a.length - b.length)));
    if(balance === "second") return arr.concat(b.slice(-(b.length - a.length)));

}