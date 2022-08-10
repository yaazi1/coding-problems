/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i];
    // !!! don't use hash[key] to see if a key exists, if the value of the key === 0, JS will return false
    if (dif in hash) {
      return [i, hash[dif]]
    } else {
      hash[nums[i]] = i;
    }
  }
};