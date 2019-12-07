class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        result = [0, 0]
        result[0] = self.find_left_index(nums, target)
        result[1] = self.find_right_index(nums, target)
        return result
    
    def find_left_index(self, arr, target):
        index = -1
        low = 0
        high = len(arr) - 1
        while (low <= high):
            mid = int(low + (high - low) / 2)
            if (arr[mid] >= target):
                high = mid - 1
            else:
                low = mid + 1
            
            if (arr[mid] == target):
                index = mid
        return index
    
    def find_right_index(self, arr, target):
        index = -1
        low = 0
        high = len(arr) -1
        while (low <= high):
            mid = int(low + (high - low) / 2)
            if (arr[mid] <= target):
                low = mid + 1
            else:
                high = mid - 1
            
            if (arr[mid] == target):
                index = mid
        return index
