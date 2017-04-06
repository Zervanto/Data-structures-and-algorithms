/*
* @Author: Zervanto
* @Date:   2017-04-05 23:28:34
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-06 10:36:06
*/

'use strict';
function quickSort(arr) {
    if (arr.length == 0) {
    return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(quickSort(a));