use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut vec: Vec<i32> = Vec::new();
        let mut hash_map = HashMap::new();
        for (i, n) in nums.iter().enumerate() {
            let mut key = target - n;
            if hash_map.contains_key(&key) {
                vec.push(hash_map[&key]);
                vec.push(i as i32);
            } else {
                hash_map.insert(n, i as i32);
            }
        }
        return vec;
    }
}
