var container = document.body.children[0].children[0].children
console.log(container)

colorObj = {
    1:"red",
    2:"blue",
    3:"white",
    4:"orange",
    5:"pink",
    6:"aqua",
    7:"yellow",
    8:"green",
    9:"brown",
    0:"violet"
}
for (let index = 0; index < container.length; index++) {
    const element = container[index];
    var value = Math.floor((Math.random())*10)
    console.log(value)
    element.style.backgroundColor = colorObj[value]
    console.log(element)
    
}