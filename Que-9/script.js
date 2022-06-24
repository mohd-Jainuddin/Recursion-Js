// Print sum of all the first 10 even numbers?

// function
function even(num){
    if(num<=10){
        console.log(num*2)
        return even(num+1)
    }
}
// function call
even(1)