// const coba = new Promise(resolve => {
    
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000)    


// })

// coba.then(()=> console.log(coba))
function cobaPromise(){
    return new Promise((resolve, reject) => {
        const waktu =  10000
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu)    
        }else{
            reject('kelamaan')
        }
    
    
    })
}

// const coba = cobaPromise()
// coba.then(() => console.log(coba)).catch(() => console.log(coba))
// console.log(coba)


async function cobaAsync(){
    try{
        const coba = await cobaPromise()
        console.log(coba)
    }catch(e){
        console.error(e)
    }
}


cobaAsync()