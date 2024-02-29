// ambil element video
const video = Array.from(document.querySelectorAll("[data-duration]"))
// pilih JS lanjutan
let JSLanjut = video.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN"))
// ambil durasi video
.map(item => item.dataset.duration)
// ubah durasi -> float, -> menit ke detik
.map(waktu => {
    // 10:30 -> [10, 30] split
    const parts = waktu.split(':').map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1]
})
// jumlahkan semua detik
.reduce((a, b) => a + b, 0)
// ubah jadi jam menit detik
const jam = Math.floor(JSLanjut / 3600)
JSLanjut = JSLanjut - jam * 3600
const menit = Math.floor(JSLanjut/60)
const detik = JSLanjut - menit * 60
// simpan di DOM
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`

const jmlVideo = video.filter(video => video.textContent.includes("JAVASCRIPT LANJUTAN")).length
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.innerHTML = `${jmlVideo}`

console.log(jmlVideo)
console.log(jam)
console.log(menit)
console.log(detik)