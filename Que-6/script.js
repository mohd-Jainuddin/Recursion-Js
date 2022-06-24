// Print sum of all the numbers in the given range?

let a = parseInt(process.argv[2])
let b = parseInt(process.argv[3])

// Function
let s = 0
function Sum(n1, n2) {
    if (n1<=n2) {
        s+=n1
        return  Sum(n1 + 1, n2)
    }else{
        return  s
    }
}
console.log(Sum(a, b))