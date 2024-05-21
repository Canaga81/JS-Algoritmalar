export const letterCapitalize = (str) => {

    // return str
    let sentence = [];
    
    str.split(' ').forEach((word) => {
        sentence.push(word.slice(0, 1).toUpperCase() + word.slice(1, word.length));
    });

    return sentence.join(' ');

}