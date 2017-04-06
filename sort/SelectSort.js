/*
* @Author: Zervanto
* @Date:   2017-04-06 10:39:10
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-06 23:11:03
*/

'use strict';
function selectSort(arr){
    if( arr.length == 0){
        return ;}
    var min;
    for(var i=0;i<arr.length-1;i++){
        min = i;
        for(var j=i+1;j<=arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min!= i){
            arr[i] = arr[i]+arr[min];
            arr[min] =arr[i]-arr[min];
            arr[i]=arr[i]-arr[min];
        }
    }
    return arr;
}
var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(selectSort(a));