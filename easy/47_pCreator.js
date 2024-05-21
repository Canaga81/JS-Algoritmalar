export const pCreator = (str) => {

    let trashStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

    if(isPalindrome(trashStr)) return "Bu Soz Palindromedir, hec bir herfin cixarilmasina ehtiyac yoxdur !";

    let removedLetters = [];

    let [removed, newStr] = removeLetterFunc(trashStr);
    removedLetters.push(removed);

    if(isPalindrome(newStr) === true) {
        return removed;
    }
    else {
        
        let [removed2, newStr2] = removeLetterFunc(newStr);
        removedLetters.push(removed2);

        if(isPalindrome(newStr2) === true) {
            return removedLetters.join(',')
        }
        else {
            return "Bu Palindrome Soz Deyil !";
        }

    }


}

const isPalindrome = (word) => {

    return word.split('').reverse().join('') === word ? true : false;

}

const removeLetterFunc = (str) => {

    let item = Math.floor(str.length / 2);
    let arr = str.split('');

    for(let i=0; i<item; i++) {

        if(str[i] != str[str.length - 1 - i]) {
            arr.splice(i, 1);
            return [str[i], arr.join('')];
        }

    }

}