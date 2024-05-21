export const faktoryel = (num) => {

    let fact = 1;
    for(let i=2; i<=num; i++) {
        fact *= i;
    }

    return fact;

}