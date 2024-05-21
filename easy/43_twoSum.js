export const twoSum = (nums, target) => {

    let valueNum = '';

    if(nums.length === 2 && nums[0] + nums[1] === target) valueNum = [0, 1];

    for(let i=0; i<nums.length; i++) {

        let itemI = nums[i];
        const num_f = nums.filter((char) => char != itemI);
        for(let j=0; j<num_f.length; j++) {
            if(itemI + num_f[j] === target) return "[" + i + "," + (j+1) + "]";
        }

    }

    return valueNum = "" ? false : valueNum;

}