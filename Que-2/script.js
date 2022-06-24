// Print all the numbers in descending order in the given range?

let a=parseInt(process.argv[2])
let b=parseInt(process.argv[3])

// Function
function descending(n1,n2){
    if(n2>=n1){
        console.log(n2)
        return descending(n1,n2-1)
    }
}
// function call
console.log(descending(a,b))