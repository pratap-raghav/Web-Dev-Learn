var array = [1, 1.5, true, "RT", [1, 1.5, true, "RT"]]

console.log(array)
console.log(array[4])
console.log("Array Length:", array.length)
console.log("typeof array:", typeof array)

var copy = array
array[0]=155
array[0]=array[4]
array[4]=0
array[2]=123
console.log("Initial:",copy,"- It is changed and the same address was assigned to the new variable.")
console.log("Edit:",array)