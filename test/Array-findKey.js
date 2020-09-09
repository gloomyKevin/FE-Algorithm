// 在数组a中，查找key，返回key所在的位置
// 其中，n表示数组a的长度
// a = {4, 2, 3, 5, 9, 6} n=6 key = 7
// a = {4, 2, 3, 5, 9, 6} n=6 key = 6

// 无哨兵的常规操作
var findKey = function (arr, key) {
    if (arr == null || key <= 0) {
        return -1
    }

    let i = 0
    while (i < Array.length) {
        if (arr[i] === key) {
            return i
        }
        i++;
    }
    return -1;
}

// 设置哨兵操作
// 目的.省略边界值操作
var findKeyBySentinel = function (arr, key) {
    if (arr == null || key <= 0) {
        return -1;
    }

    let n = arr.length

    // 此处为后来增加
    // 替换前未设置哨兵检测
    if (a[n - 1] === key) {
        return n - 1
    }

    let temp = arr[n - 1];
    arr[n - 1] = key;

    let i = 0;
    while (arr[i] != key) {
        i++
    }

    arr[n - 1] = temp;
    if (i === n - 1) {
        return -1;
    } else {
        return i;
    }
}
