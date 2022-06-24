// Print sum of all the first 10 even numbers?

// function
let sum=0
function even(num){
    if(num<=10){
        sum+=num*2
        return even(num+1)
    }
    else{
        return sum
    }
}
// function call
console.log(even(1))