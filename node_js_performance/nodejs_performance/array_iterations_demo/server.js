var arr = new Array(1000);
arr[0] = 20;
arr[434] = 200;
 
for(var i=0; i<arr.length; i++){
    console.log("I am for");
}
 
arr.forEach(function(element){
    console.log("I am forEach");
});