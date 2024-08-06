
var num = prompt("Enter Number")
// var num = 6
var fact=1
var array = [1]
for (let i = 1; i <= num; i++) {
    fact*=i
    array.push(i)
}
console.log("Factorial of", num, "using for loop -",fact)

const factorial = (a, b)=>{
    return a*b
}
console.log("Factorial of", num, "using reduce -",array.reduce(factorial))
