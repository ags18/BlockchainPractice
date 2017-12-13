exports.findSum=function(list){
    var sum=0;
    for(var i=0;i<list.length;i++){
        sum=sum+list[i];
    }
    return sum;
}