def centered_average(nums):
    total = 0
    smallest = min(nums)
    largest = max(nums)
    
    nums.remove(smallest)
    nums.remove(largest)
    
    for n in nums:
        total += n
    
    return total // len(nums)