// 算法描述： 
// 1. 从第一个元素开始，该元素可以认为已经被排序 
// 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描 
// 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置 
// 4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置 
// 5. 将新元素插入到该位置后 
// 6. 重复步骤 2~5

// 现有一组数组 arr = [5, 6, 3, 1, 8, 7, 2, 4]
// [5] 6 3 1 8 7 2 4  //第一个元素被认为已经被排序
// [5,6]  3 1 8 7 2 4 //6与5比较，放在5的右边
// [3，5，6]  1 8 7 2 4 //3与6和5比较，都小，则放入数组头部
// [1,3,5,6]   8 7 2 4 //1与3,5,6比较，则放入头部
// [1,3，5，6，8]   7 2 4
// [1,3，5，6,7，8]  2 4
// [1，2,3，5，6,7，8] 4
// [1，2,3，4，5，6,7，8]

function sort(arr) { 
    var result = [];
    for(var i=0; i< arr.length; i++) {
        var temp = arr[i];
        var j=0;

        for (j =0; j< result.length; j++) {
            if (result[j] > temp) {
                break;
            }
        }
        result.splice(j, 0, temp);
    }
    return result;
}
console.log(sort1([5, 6, 3, 1, 8, 7, 2, 4]))
// 2022年12月
// 基于当前数组的插入排序
function sort1(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    for(let i = 1; i< arr.length; i++) {
        let j = i-1;
        let temp = arr[i];
        while(j>= 0) {
            if (arr[j] > temp) {
                arr[j + 1] = arr[j]
                j--
                if (j === -1) {
                    arr[0] = temp;
                }
            } else {
                arr[j + 1] = temp;
                break;
            }
        }
    }
    return arr;
}