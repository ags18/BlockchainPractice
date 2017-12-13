exports.findProd=function(list){
    var product=1;
    for(var i=0;i<list.length;i++){
        product=product*list[i];
    }
    return product;
}