// for of
// const mhs = ['keivn', 'wil', 'ded']

// cara biasa pakai looping biasa atau for each

// for(const m of mhs){
//     console.log(m)
// }

// const nama = 'kevinChipurtra'
// for (const n of nama){
//     console.log(n)
// }

// Nodelist
// const liNama = document.querySelectorAll('.nama')
// console.log(liNama)
// liNama.forEach(n => console.log(n));
// // atau
// for (const i of liNama){
//     console.log('ini pakai for of')
//     console.log(i.textContent)
// }


// // arguments
// function jumlahkanAngka(){
//     let jumlah = 0
//     for(const i of arguments){
//         jumlah += i
//     }
//     return jumlah
// }

// console.log(jumlahkanAngka(1,2,3,4,5))


// ======================= For in ==============================
//  simplenya untuk objek, karean objek tidak bisa pakai for of
const mhs = {
    nama: 'kevin',
    umur: 33,
    email: 'kevin@gmial.com'
}

for (m in mhs){
    console.log(mhs[m]) // ambil value
    console.log(m) // ambil properti
}