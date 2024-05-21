export const decimalToRoman = (num) => {

    /*

        Algoritma Ardicilligi

        3999 - 1000 = 2999 (M)
        2999 - 1000 = 1999 (M)
        1999 - 1000 = 999 (M)
        999 - 900 = 99 (CM)
        99 - 90 = 99 (XC)
        9 - 9 = 0 (IX)
        0

    */

    const romanSymbols = {
        M: 1000,
        C: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let inRoman = "";

    for(let key in romanSymbols) {

       while(num >= romanSymbols[key]) {
        inRoman += key;
        num -= romanSymbols[key];
       }
       
    }

    return inRoman;

}