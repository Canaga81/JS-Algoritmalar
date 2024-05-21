export const powerSet = (arr = []) => {

    const nOSS = 2 ** arr.length;

    let result = [];

    for(let i=0; i<nOSS; i++) {

        let toBinary = Number(i).toString(2);
        let zerosAddToBinary = "0".repeat(arr.length - toBinary.length) + toBinary;
        
        let value = "";
        
        for(let j=0; j<arr.length; j++) {
            if(zerosAddToBinary[j] === "1") value += arr[j];
        }

        result.push(value);

    }

    return result;

}