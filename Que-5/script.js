// Find nth digit of the fibonacci series?

let n=parseInt(process.argv[2])
// Function
let x=0
console.log(0)
console.log(1)
function fibonacci(n,a,b)
{
    if(n>=1)
    {
        x=a+b
        a=b
        b=x
        console.log(x)
        return fibonacci(n-1,a,b)
    }
}
// function call
fibonacci(n-2,0,1)