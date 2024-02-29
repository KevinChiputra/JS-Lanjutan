// const mhs = {
//     nama: 'kevin',
//     umur: 33,
//     nrp: '1111111',
//     email: 'text@gmail.com'
// }

// const el = `<div class="mhss">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// 2. looping
// const mhs = [
//     {
//         nama: 'kevin',
//         umur: 33,
//     },
//     {
//         nama: 'Devin',
//         umur: 32,
//     },
//     {
//         nama: 'evin',
//         umur: 34,
//     },
// ]


// const el = `<div class="mhss">
//     ${mhs.map(m => `<ul> 
//     <li>${m.nama}</li>
//     <li>${m.umur}</li>
//     </ul>`).join('')}
// </div>`


//3. Condition
// ternary
// const lagu = {
//     judul: 'tetap dalam jiwa',
//     penyanyi: 'insyana',
//     feat: 'dia dimas'
// }

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.judul}</li>
//     <li>oleh ${lagu.penyanyi} ${lagu.feat ? `feat: ${lagu.feat}` : ""}
// </ul>
// </div>`

// 4. Nested
const mhs = {
    nama: 'kevin',
    semester: 5,
    matakuliah: ['DS', 'ALGO', 'SI', 'UIUX']
}

function cetakMaktul(mataKuliah){
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `
}


const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">${mhs.semester}</span>
<h4>Mata Kuliah</h4>
${cetakMaktul(mhs.matakuliah)}
</div>`

document.body.innerHTML = el