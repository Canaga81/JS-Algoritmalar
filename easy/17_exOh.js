export const exOh = (str) => {

    const arr = str.toLowerCase().split('');

    if(arr.length === 0) {
        return "X ve O herfleri Yoxdur !";
    }
    
    let x = 0;
    let o = 0;

    arr.forEach((item) => {

        if (item === 'x') {
            x+=1;
        }
        else if (item === 'o') {
            o += 1;
        }

    });

    if (x === o) {
        return 'X ve O herflerinin sayi beraberdir.'
    }
    else if (x > o) {
        return "X herflerini sayi O herflerinin sayindan coxdur."
    }
    else {
        return "O herflerini sayi X herflerinin sayindan coxdur."
    }

}