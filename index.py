import random


# generate a random list
def createRandomArray(length, min, max):
    if (min > max):
        return []
    arr = []
    for i in range(length):
        number = random.randint(min, max)
        arr.append(number)
    return arr


def isSorted(arr):
    for i in range(len(arr)):
        if (i < len(arr) - 1 and arr[i + 1] < arr[i]):
            print('not sorted')
            return False
    print('sorted')
    return True


def swap(arr, i, j):
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp


def quickSort(arr, length):
    __quickSort(arr, 0, length - 1)


# 对arr[left...right]进行快速排序
def __quickSort(arr, left, right):
    if (left >= right):
        return
    p = __partition(arr, left, right)
    __quickSort(arr, left, p - 1)
    __quickSort(arr, p + 1, right)


# 对arr[left...right]进行partition操作
# 返回索引p, 使得arr[left...p-1] < arr[p] < arr[p+1...right]
def __partition(arr, left, right):
    v = arr[left]
    j = left
    for i in range(left, right):
        i = i + 1  # 因为left和right都是索引，所以要加一
        if (arr[i] < v):
            swap(arr, i, j + 1)
            j = j + 1
    swap(arr, left, j)
    return j


arr1 = createRandomArray(1000, 10, 1000)
quickSort(arr1, len(arr1))
print(arr1)
isSorted(arr1)
