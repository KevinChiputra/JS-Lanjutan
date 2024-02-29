// spread operator
// memecah itnerables menjadi single element

const mhs = ['kevin', 'chi', 'eri']
// console.log(...mhs)

// digunakan 2 array -> lebih fleksibel ketimbang .concat. Karena bisa menambahkan ditengah"
const dosen = ['wily', 'william', 'david']
const orang = [...mhs, 'Aji', ...dosen]
console.log(orang)



// meng-copy array
const mhs1 = [...mhs]
console.log(mhs1)

// misal kita mengambil data dari nodeList
const liNama = document.querySelectorAll('.nama')
const tempNama = [...liNama].map(a => a.innerHTML) // bisa dibilang karena liNama adalah node list, kita typecasting dengan "[]"
console.log(tempNama)

// ======
const judul = document.querySelector('.judul')
const huruf = [...judul.textContent].map(h => `<span>${h}</span>`).join('')
judul.innerHTML = huruf
console.log(huruf)