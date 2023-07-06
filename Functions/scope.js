let a = 20; //Global variable. accesibe to everyone.

function add ( b){
    console.log( a + b);
    let c = 30;
    console.log(a + b + c);

}
 add(20);
 

 function multiply(c){
    console.log( a * c);
 }

 multiply(3);

 function greet(){
    let hello = "Hi";
    function talk(){
        let greeting = "Hey there";
        console.log(`${hello} ${greeting}`);
    }
     
    talk()
 }

 greet()

 