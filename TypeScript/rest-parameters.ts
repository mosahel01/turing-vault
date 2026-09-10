// function formatLabels(labels: string[]) {
//     if (labels.length === 1) {
//         return "No Labels";
//     } else if (labels.length === 2) {
//         return `Labels: ${labels[1]}`;
//     } else {
//         return `Labels: ${labels.join(", ")}`
//     }
// }

// console.log(formatLabels(["hi", "hello", "salam", "dorod"]));
// console.log(formatLabels(["hi"]));
// console.log(formatLabels([""]));


// // brute force
// function twoSum(nums: number[], target: number) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [nums[i], nums[j]]
//             }
//         }
//     }
// }

const nums: number[] = [2, 7, 11, 15]
const target: number = 9

const twoSum = (nums:number[], target:number) => {
    let Hmap: number = {};
    for (let [index, num] of nums.entries()) {
        if(nums[index] == )
    }
    console.log(Hmap);
}

twoSum(nums, target);

