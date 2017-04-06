/*
* @Author: Zervanto
* @Date:   2017-04-06 20:53:30
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-06 22:15:22
*/

'use strict';
function bubbleSort (arr){
    if(arr.length == 0){
        return [] ;
    }
    for(var i=0;i<arr.length-1;i++){
        var flag = true;
        for(var j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                arr[j]= arr[j]+arr[j+1];
                arr[j+1]=arr[j]-arr[j+1];
                arr[j]=arr[j]-arr[j+1];
                flag = false;
            }
        }
        if(flag){
            break;
        }
    }
    return arr;
}
var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(bubbleSort(a));