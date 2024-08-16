var container = document.body.children[0].children[0].children

for (let index = 0; index < container.length; index++) {
    const element = container[index];
    
    var r = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)


    console.log(r,g,b)
    element.style.backgroundColor = `rgb(${r},${g},${b})`
    
}