def remove_duplicates_ordered(arr):
    result = []
    for num in arr:
        if num not in result:
            result.append(num)
    return result

print(remove_duplicates_ordered([1, 2, 2, 3, 4, 4, 5]))  # Output: [1, 2, 3, 4, 5]
