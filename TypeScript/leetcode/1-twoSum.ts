const nums: number[] = [3, 14, 9, 5, 4]
const target: number = 9;

// function twoSum(nums: number[], target: number): number[] {
//     const seen: any = {}; /* map */
//     for (let i = 0; i < nums.length; i++) { 
//         const num = nums[i];
//         if (target - num in seen) return [i, seen[target - num]];
//         seen[num] = i;
//     }    
//     return seen;
// };

function twoSum(nums:number[], target: number): number[] {
    const seen: any = {}; /* map */
    for (let i = 0; i < nums.length; i++) {
        seen[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const required = target - nums[i]; /* 9 - 3,14,9,5,4 */
        if (seen[required] !== ) {
            
        }
    }
}


console.log(twoSum(nums, target));
