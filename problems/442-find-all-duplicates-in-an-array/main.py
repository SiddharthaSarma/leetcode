class Solution:
    def findDuplicates(self, nums: List[int]) -> List[int]:
        output = []
        for x in range(len(nums)):
            index = abs(nums[x]) - 1;
            if (nums[index] < 0):
                output.append(index + 1)
            nums[index] = -nums[index]
        return output
