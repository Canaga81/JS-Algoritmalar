export const letterCount = (str) => {

    const arr = str.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(' ');

    let sentenceBase = [];

    for(let i=0; i<arr.length; i++) {

        let obj = [];

        arr[i].split('').forEach((letter) => {

            letter in obj ? obj[letter] += 1 : obj[letter] = 1;

        });

        sentenceBase.push(obj);

    }

    let maxLetter = [];

    sentenceBase.forEach((char) => {

        maxLetter.push(Math.max(...Object.values(char)));
        
    });

    let maxSentence = Math.max(...maxLetter);

    return maxSentence < 2 ? -1 : (arr[maxLetter.indexOf(maxSentence)] ? arr[maxLetter.indexOf(maxSentence)] : -1);

}