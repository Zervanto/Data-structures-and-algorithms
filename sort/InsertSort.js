/*
* @Author: Zervanto
* @Date:   2017-04-06 10:38:18
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-07 15:51:04
*/

'use strict';
function insertSort(arr){
    if(arr.length==0){
        return ;
    }
    for(var i=1;i<arr.length;i++){
        var j=i,
            temp = arr[i];
        //从第temp元素开始，一次和前面已经排好序的元素比较，如果前一个元素大于temp，那么该元素后移
        while(j>0 && temp < arr[j-1]){
            arr[j] = arr[j-1];
            j--;
        }
        //将temp插入
        arr[j] = temp;
    }
    return arr;
}
function insertionSort(arr) {
    var temp, inner;
    for (var outer = 1; outer <= arr.length - 1; ++outer) {
        temp = arr[outer];
        inner = outer;
        while (inner > 0 && (arr[inner - 1] >= temp)) {
        arr[inner] = arr[inner - 1];
        --inner;
        }
        arr[inner] = temp;
    }
}
var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(insertSort(a));