function solution(nums) {
    const len = Math.floor(nums.length/2);
    
    const set = new Set(nums);

    return set.size < len ? set.size : len;
}