export const offlineMin = (strArr) => {

    const [index, freqE] = E_info(strArr);

    const newArr = strArr.splice(0, index + 1).filter((char) => char !== "E").sort((a, b) => a-b);

    return newArr.splice(0, freqE);

}

const E_info = (strArr) => {

    let idx = '';
    let freq_E = 0;

    for(let i=0; i<strArr.length; i++) {

        if(strArr[i] === "E") {
            idx = i;
            freq_E += 1;
        }

    }

    return [idx, freq_E];

}