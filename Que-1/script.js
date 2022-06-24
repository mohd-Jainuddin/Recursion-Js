// Print all the numbers in the given range ?

let a=parseInt(process.argv[2])
let b=parseInt(process.argv[3])
// Function 
function range(n1,n2){
    if(n1<=n2){
        console.log(n1)
        return range(n1+1,n2)
    }
}
// function call
range(a,b)