// let mahasiswa = ['kevin', 'chiputra', 'william']

// buat hitung length dengan arrow function
// cara biasa
// let jumlahHuruf = mahasiswa.map(function(nama){
//     return nama.length
// })

// cara ringkas dengan arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length)
// console.log(jumlahHuruf)

// ini cara jika ingin return object
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}))
// console.table(jumlahHuruf)


// ========================================== Part 8 =========================
// const Mahasiwa = function(){
//     this.nama = 'kevin'
//     this.umur = 33
//     this.sayaHello = function(){
//         console.log(`hello ${this.nama}, dan saya ${this.umur} tahun`)
//     }
// }


// const kevin = new Mahasiwa()
// kevin.sayaHello()


const box = document.querySelector('.box')
box.addEventListener('click', function(){
    box.classList.toggle('size')
    setTimeout(() => {
        this.classList.toggle('caption')
        // console.log(this)
    }, 600)
})