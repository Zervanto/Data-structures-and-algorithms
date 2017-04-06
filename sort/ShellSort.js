/*
* @Author: Zervanto
* @Date:   2017-04-06 10:38:52
* @Last Modified by:   Zervanto
* @Last Modified time: 2017-04-06 23:38:21
*/

'use strict';
function shellSort(arr){
    if(arr.length == 0){
        return ;
    }
    var d = arr.length/2;
    while(d>=1){
        shellInsert(arr,d);
        d/=2;
    }
    return arr;
}
function shellInsert(arr,d){
    for(var i=d;i<arr.length;i++){
        var j = i-d;
        var temp =arr[i];
        while(j>=0&&arr[j]>temp){
            arr[j+d] = arr[j];
            j-=d;
        }
        if(j!=i-d){
            arr[j+d]=temp;
        }
    }
    return arr;
}
var a = [];
for (var i = 0; i < 10; ++i) {
a[i] = Math.floor((Math.random()*100)+1);
}
console.log(a);
console.log(shellSort(a));