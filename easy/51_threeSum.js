export const threeSum3 = (numArr, target) => {

    numArr.sort((a, b) => a-b);
    let subSets = [];

    for(let i=0; i<numArr.length - 2; i++) { //^ numArr.length - 2 => yazmagimizin sebebi axirda array'in icinde 3 dene reqemin qalmasini saglamakdir.
        
        if(numArr[i] !== numArr[i-1]) {

            let left = i+1;
            let right = numArr.length - 1;

            while(left < right) {

                let sum = numArr[i] + numArr[left] + numArr[right];

                if(sum > target) {
                    right--;
                }
                else if(sum < target) {
                    left++;
                }
                else {

                    subSets.push([numArr[i], numArr[left], numArr[right]]);
                    while(numArr[left] == numArr[left+1]) left++;
                    while(numArr[right] == numArr[right-1]) right--;
                    
                    left++;
                    right--;

                }

            }

        }

    }

    return subSets;

}