export const largestPair = (num) => {

  if (num.toString().length === 2) {

    let numRev = parseInt(num.toString().split("").reverse().join(""));
    const arr = [num, numRev];

    return Math.max(...arr) % 2 === 0
      ? Math.max(...arr)
      : Math.min(...arr) % 2 === 0
      ? Math.min(...arr)
      : "Reqemin butun sayilari tekdir !";

  }

  const sortedArr = num.toString().split('').sort((a, b) => b-a);

  let onluq = sortedArr[0];
  
  let teklik = teklikFunc(sortedArr);

  if(teklik === undefined) {
    return onluq % 2 === 0 ? sortedArr[1] + onluq : "Reqemin butun sayilari tekdir !";
  }
  else {
    return onluq + teklik;
  }

};

const teklikFunc = (arr) => {

    let unit;

    for(let i=1; i<arr.length; i++) {
        
        if(arr[i] % 2 === 0) {
            unit === undefined ? unit = arr[i] : unit;
        }

    }

    return unit;

}