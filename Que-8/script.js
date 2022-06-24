// Write the recursive function to check whether a given number is prime or not?

let a=parseInt(process.argv[2])
// Function
function Prime(n,i){
    if(i!=1){
        if(n%i!=0){
            return Prime(n,i-1)
        }
        else{
            return 0
        }
    }
    else{
        return 1
    }
}
console.log((Prime(a,a-1)==1?"Prime":"Not Prime"))