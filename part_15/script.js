// destructuring var / asg

// destructuring array
const perkenalan = ['halo', 'nama', 'saya', 'kevin']
// const [salam, satu, dua, nama] = perkenalan

// skip item
// const [salam, , , nama] = perkenalan
// console.log(nama)


// swap array
// let a = 1;
// let b = 2;

// [a, b]=[b, a]


// return value pada function
// function coba(){
//     return [1, 2]
// }


// const [aTest, bTest] = coba()
// console.log(aTest + ' ini test')

// rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5]
// console.log(a)
// console.log(values)


// ======================================= Ini materi objek ======================================

// destructuring object tanpa deklarasi object (ngebug aneh)
// ({nama, umur} = {
//     nama: 'kevin',
//     umur: 33
// });
// console.log(nama)

// kan kalau object nama hrs sama dgn atribut, cara ganti namanya:
// const mhs={
//     nama: 'kevin',
//     umur: 33
// }

// const {nama:namaBaru, umur:namaUmurBaru} = mhs
// console.log(namaBaru)


// memberikan default value
// const mhs={
//     nama: 'kevin',
//     umur: 33,
//     // email: 'ini email'
// }

// const {nama, umur, email="@binus.ac.id"} = mhs
// console.log(email)


// pakai rest parameter
// const mhs={
//     nama: 'kevin',
//     umur: 33,
//     email: 'test'
// }

// const {nama, ...values} = mhs
// console.log(values)


// mengambil field pada object, setelah dikirim sebagain parameter untuk function
// const mhs={
//     id: 123,
//     nama: 'kevin',
//     umur: 33,
//     email: 'test'
// }

// function getIdMhs({id}){
//     return id
// }

// console.log(getIdMhs(mhs))

// ================================================================ Part 16 ===================

// destructuring return value
// function penjumlahanPerkalian(a, b){
//     return [a + b, a-b, a * b, a/b]
// }

// const [jumlah, ...values] = penjumlahanPerkalian(2, 3)
// console.log(jumlah)
// console.log(values)


// cara lain jika tidak mau urutan jadi pengaruh
// function kalkulasi(a, b){
//     return{
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     }
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2, 3)


// Destructuring Function arguments
// const mhs1 = {
//     nama: 'kevin',
//     umur: 33,
//     email: 'kevin@gmail.com'

// }


// function cetakMhs({nama, umur}){
//     return `halo saya ${nama}, umur saya ${umur} tahun`
// }

// console.log(cetakMhs(mhs1))

// jika terdapat objek di dalam objek, dpt di distructuring lagi dgn cara:
const mhs1 = {
    nama: 'kevin',
    umur: 33,
    email: 'kevin@gmail.com',
    nilai: {
        tugas: 90,
        UTS: 89,
        UAS: 88
    }

}


function cetakMhs({nama, umur, nilai: {tugas, UTS, UAS}}){
    return `halo saya ${nama}, umur saya ${umur} tahun. Nilai UAS saya ${UAS}`
}

console.log(cetakMhs(mhs1))