// Print the product of all the numbers in given range?

let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

// Function
let p = 1
function Sum(n1, n2) {
    if (n1<=n2) {
        p*=n1
        return  Sum(n1 + 1, n2)
    }else{
        return  p
    }
}
console.log(Sum(a, b))