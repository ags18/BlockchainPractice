var list = new Array();
list.push(1,2,3,4,5);
console.log("Elements in list are: ",list);
console.log("Even nos are: ");
for(var i=0;i<list.length;i++){
    if(list[i]%2==0){
        console.log(list[i]);
    }
}
