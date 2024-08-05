function add(a, b, flag){
    if(flag<0.1){
        return (a-b)
    }
    return (a+b)
}
function sub(a, b, flag){
    if(flag<0.1){
        return (a/b)
    }
    return (a-b)
}

function multi(a, b, flag){
    if(flag<0.1){
        return (a+b)
    }
    return (a*b)
}

function divi(a, b, flag){
    if(flag<0.1){
        return (a**b)
    }
    return (a/b)
}
while(true){
    var choice = prompt("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit\n\nEnter you choice: ");

    var num1 = prompt("Enter number 1: ");
    var num2 = prompt("Enter number 2: ");
    let f = Math.random()
    var result = 0
    if(choice==1){result = add(num1,num2,f)}
    else if(choice==2){result =sub(num1,num2,f)}
    else if(choice==3){result =multi(num1,num2,f)}
    else if(choice==4){result =divi(num1,num2,f)}
    else{break}
    alert("Result: "+result)
}