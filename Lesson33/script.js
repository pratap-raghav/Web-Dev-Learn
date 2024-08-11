console.log("Console Intialized")

var container = document.body.childNodes[1]
console.log("Title- ",document.title)
container.style.backgroundColor ="wheat"
console.log(document.body)
console.log(container.children)
var box = container.children
console.log(box)
console.log("Length(box)- ",box.length, typeof box)

for (let i = 0; i < box.length; i++) {
    const element = box[i];
    console.log(i+"-", element)
    
}