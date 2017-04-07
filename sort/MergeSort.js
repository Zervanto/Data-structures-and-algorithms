/*
* @Author: Zervanto
* @Date:   2017-04-06 10:40:12
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-07 16:43:51
*/

'use strict';
/* 排序并合并*/
function merge(left, right) {
   var result = [];

   while(left.length > 0 && right.length > 0) {
       if(left[0] < right[0]) {
           result.push(left.shift());
       } else {
           result.push(right.shift());
       }
   }
   /* 当左右数组长度不等.将比较完后剩下的数组项链接起来即可 */
   return result.concat(left).concat(right);
}

function mergeSort(arr) {
    console.time('归并排序耗时');
   if(arr.length == 1) return arr;
   /* 首先将无序数组划分为两个数组 */
   var mid = Math.floor(arr.length / 2);
   var left = arr.slice(0, mid);
   var right = arr.slice(mid);
   /* 递归分别对左右两部分数组进行排序合并 */
    console.timeEnd('归并排序耗时');
   return merge(mergeSort(left), mergeSort(right));
}

var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(mergeSort(a));