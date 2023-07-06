function add (num,callback){
    console.log(num);
    console.log({callback})
    callback(num);
}
function nums(){
    console.log('Hello')
};
add(12, nums);