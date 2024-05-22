export const twoSum2 = (nums, target) => {

    //^ Islevsiz yol
    // for(let i=0; i<nums.length; i++) {

    //     for(let j=0; j<nums.length; j++) {

    //         if(nums[i] + nums[j] === target) return `${i}, ${j}`;
            
    //     }

    // }

    //^ Oz Yolum
    // const spliceNum = parseInt(nums.splice(0, 1));

    // for(let i=0; i<nums.length; i++) {
    //     if(nums[i] + spliceNum === target) return `${i}`;
    // }

    //^ Youtube Yolu
    // for(let i=0; i<nums.length; i++) {

    //     const currentValue = nums[i];
    //     const difference = target - currentValue;

    //     const secondIndexValue = nums.indexOf(difference);

    //     if(secondIndexValue > -1 && nums[i] !== secondIndexValue) {

    //         return [i, secondIndexValue];

    //     }

    // }

}