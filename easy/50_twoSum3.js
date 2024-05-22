export const twoSum3 = (numArr, target) => {

    numArr.sort((a, b) => a-b);

    let left = 0;
    let right = numArr.length - 1;

    while(left < right) {

        let sum = numArr[left] + numArr[right];
        
        if(sum < target) {
            left++;
        }
        else if (sum > target) {
            right--;
        }
        else {
            return [left, right];
        }

    }

}