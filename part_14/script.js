// const nama = 'kevin'
// const umur = 33

// function coba(strings, ...values){
//     // let result = ''
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str =  coba`halo ${nama}, ${umur} tahun`
// console.log(str)


// ini jika mau highlight
const nama = 'kevin'
const umur = 33

function highlight(strings, ...values){
    // let result = ''
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`
    // })
    // return result

    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
}

const str =  highlight`halo ${nama}, ${umur} tahun`
console.log(str)