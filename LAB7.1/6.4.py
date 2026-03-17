def sum67(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 6:
            while i < len(nums) and nums[i] != 7:
                i += 1
            if i < len(nums) and nums[i] == 7:
                i += 1          
        else:
            total += nums[i]
            i += 1
    return total