// Print all the even numbers in the given range?

let a=parseInt(process.argv[2])
let b=parseInt(process.argv[3])

// function
function Even(n1,n2){
    if(n1<=n2){
        if(n1%2==0){
            console.log(n1)
        }
        return Even(n1+1,n2)
    }
}
// function call
Even(a,b)