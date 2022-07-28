let array1 = [5,9,3]
let array2 = ["a","e","i","o","u"]
let array3 = [13,"outubro",true]

let array1Copia = array1.slice()
let array2Copia = array2.slice()
let array3Copia = array3.slice()

console.log("\nAdicionando número");
array1Copia.push(7)
console.log(`array1: ${array1}`);
console.log(`array1Copia: ${array1Copia}`);

console.log("\nRetirando último item")
array2Copia.pop()
console.log(`array2: ${array2}`);
console.log(`array2Copia: ${array2Copia}`);

console.log("\nRetirando segundo item")
array3Copia.splice(1,1)
console.log(`array3: ${array3}`);
console.log(`array3Copia: ${array3Copia}`);