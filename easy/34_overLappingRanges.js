export const overLappingRanges = (arr) => {

 const firstSet = betweenFunc(arr[0], arr[1]);   
 const secondSet = betweenFunc(arr[2], arr[3]);
 
//^  let intersectionArr = [];
    let count = 0;

 secondSet.map((item) => {
    if(firstSet.indexOf(item) > -1) count += 1;
 })

 return count >= arr[arr.length - 1];

}

const betweenFunc = (x, y) => {

    let betweenArr = [];
    
    for(let i=x; i<=y; i++) {
        betweenArr.push(i);
    }

    return betweenArr;

}