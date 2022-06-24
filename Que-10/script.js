// Write a recursive program to find the power of given number and exponent?
let a=parseInt(process.argv[2])
// function
function power(n,e){
    if(e>=1){
        return n*power(n,e-1)
    }
    else{
        return 1
    }
}
console.log(power(a,3))