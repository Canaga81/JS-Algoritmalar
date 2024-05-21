export const palindromeTwo = (str) => {

    const reverseStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    return reverseStr.split('').reverse().join('') === reverseStr ? true : false;

}