// Find the factorial of a number?

let a=parseInt(process.argv[2])
// Function
let f=1
function fact(num){
    if(num>=1){
       f*=num
        return fact(num-1);
    }
    else{
        return f
    }
}
//function call
console.log(fact(a))