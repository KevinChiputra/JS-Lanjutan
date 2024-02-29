const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

//filter angka > 3
// pakai for
// let arr2 = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         arr2.push(angka[i])
//     }
// }

// console.log(arr2)

// filter
const newAngka = angka.filter(a => a >= 3 )
console.log(newAngka)

// map
const newAngka2 = angka.map(a => a*2)
console.log(newAngka2)

// reduce
const newAngka3 = angka.reduce((accumolator, currentValue) => accumolator + currentValue)
console.log(newAngka3)


// method chaining
const newAngka4 = angka.filter(a => a > 5).map(a => a * 3).reduce((a, b) => a + b, 0)
console.log(newAngka4)