/*
* @Author: Zervanto
* @Date:   2017-04-06 10:38:18
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-06 23:21:21
*/

'use strict';
function insertSort(arr){
    if(arr.length==0){
        return ;
    }
    for(var i=0;i<arr.length;i++){
        var j=i,
            target = arr[i];
        while(j>0 && target < arr[j-1]){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = target;
    }
    return arr;
}
var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(insertSort(a));