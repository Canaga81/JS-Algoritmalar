export const firstNonRepeating = (string) => {

    //^ let str = string.toLowerCase()  ===> Eger bunu yazsaq boyuk ve kicik herfelere duyarli olmayacaqdir !

    let value = "";

    for(let i=0; i<string.length; i++) {
        let item = string[i];
        let newStr = string.slice(0, i) + string.slice(i+1);

        if(value === "" && newStr.indexOf(item) === -1) {
            value = item;
        }
    }

    return value === "" ? "none" : value;

}