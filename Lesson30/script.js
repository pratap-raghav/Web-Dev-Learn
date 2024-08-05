console.log("------Stirng Tutorial------")
let a = "sting data"
console.log(a[0])
console.log(a[9])


console.log("\n\n-----Print using loop-----")
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
console.log("Length of", a, "is", a.length)


console.log("\n\n-----Template Literals-----")
let fn = "Raghav"
let ln = "Tanwar"
console.log(`First Name- ${fn}\nLast Name- ${ln}`)