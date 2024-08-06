function selector(typeData){
    let s1 = prompt(`Enter ${typeData} 1: `);
    let s2 = prompt(`Enter ${typeData} 2: `);
    let s3 = prompt(`Enter ${typeData} 3: `);
    f = Math.random();
    if(f<0.33){
        return s1
    }
    else if(f>0.66){
        return s3
    }
    else{
        return s2
    }
}

console.log(`Result: ${selector("Adjective")} ${selector("Shop Name")} ${selector("Another Name")}`)