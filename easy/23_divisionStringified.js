export const divisionStringfied = (n1, n2) => {

    const nisbet = Math.floor(n1 / n2).toString();
    const nisbetArrReverse = nisbet.split('').reverse();

    let arr = [];
    let j = 0;

    for(let i=0; i<nisbetArrReverse.length; i++) {

        if(j !== 0 && j % 3 === 0) {
            arr.push(nisbetArrReverse[i] + ",")
        }
        else {
            arr.push(nisbetArrReverse[i]);
        }

        j++;

    }

    return arr.reverse().join('')

}