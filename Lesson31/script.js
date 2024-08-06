// var array = [1, 1.5, true, "RT", [1, 1.5, true, "RT"]]

// console.log(array)
// console.log(array[4])
// console.log("Array Length:", array.length)
// console.log("typeof array:", typeof array)

// var copy = array
// array[0]=155
// array[0]=array[4]
// array[4]=0
// array[2]=123
// console.log("Initial:",copy,"- It is changed and the same address was assigned to the new variable.")
// console.log("Edit:",array)
// console.log(copy.toString())
// console.log("\n\n\n\n-----New Arrays Formed-----\n\n\n\n")
// arr1=[1,2,3,4,5]
// arr2=[6,7,8,9,0]
// console.log(arr1)
// console.log(arr2)
// console.log(arr1.join(" --> "))
// console.log(arr1+arr2)
// var arr3 = arr1.concat(arr2)
// console.log(arr3)
// arr3 = arr3.concat([11,12,13,14,15,16,17,18,19,10])
// console.log(arr3)

array = [9,4,7,3,6,9,8,2,1,4,5,6]
console.log(array)
console.log("\n-----foreach loop o/p-----\n")
array.forEach((element, index, arr) => {
    console.log(element, index, arr)
});
console.log("\n-----forof loop o/p-----\n")
for (const value of array) {
    console.log(value)
}
console.log("\n\n\n\n---------------------\n\n\n\n")
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log("Numbers- ",numbers)
var square = numbers.map((element)=>{
    return element**2
})
console.log("Square- ",square)

var cube = numbers.map((element)=>{
    return element**3
})
console.log("Cube- ",cube)

const evenEle = (element) =>{
    if(element%2==0)
        return true
    return false
}

console.log("Even Numbers-", numbers.filter(evenEle))
console.log("Even Square-", square.filter(evenEle))
console.log("Even Cubes-", cube.filter(evenEle))



console.log("\n\n\n\n---------------------\n\n\n\n")
var whole = [1,2,3,4,5,6,7,8,9,10]
console.log(whole)
const sum = (a, b)=>{
    return a+b
}
console.log("Sum of", whole.join(", "),"-", whole.reduce(sum))

var str = "RT Developers"
console.log("Array form", str,"-", Array.from(str))