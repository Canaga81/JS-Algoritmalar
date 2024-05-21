export const isPalindrome = (str) => {

    const newStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').reverse().join('');

    return str === newStr ? true : false;

}