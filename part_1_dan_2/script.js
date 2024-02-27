// menggunakan function declatration dengan object.create

// const methodMahasiwa = {
//     makan: function(porsi){
//         this.energi += porsi
//     },

//     main: function(jam){
//         this.energi -= jam
//     },

//     tidur: function(jam){
//         this.energi += jam * 2
//     }
// }


// function Mahasiwa(nama, energi){
//     let mahasiwa = Object.create(methodMahasiwa)
//     mahasiwa.nama = nama
//     mahasiwa.energi = energi

//     return mahasiwa
// }

// let kevin = Mahasiwa("kevin", 10)


// ============================ Part 3 menggunakan prototype ===================================

// function Mahasiwa(nama, energi){
    
//     this.nama = nama
//     this.energi = energi

// }

// Mahasiwa.prototype.makan = function(porsi){
//     this.energi += porsi
//     return `Halo ${this.nama}, selamat makan!`
// }

// Mahasiwa.prototype.main = function(jam){
//     this.energi -= jam
//     return `Halo ${this.nama}, selamat main`
// }

// Mahasiwa.prototype.tidur = function(jam){
//     this.energi += jam * 2
//     return `Selamat tidur ${this.nama}`
// }

// let kevin = new Mahasiwa("Kevin", 10)

// ++++++++++++++++ versi kelas dari code di atas ++++++++++++++++++

class Mahasiwa{
    constructor(nama, energi){
        this.nama = nama
        this.energi = energi
    }
    
    makan(porsi){
        this.energi += porsi
        return `Halo ${this.nama}, selamat makan!`
    }
    
    main(jam){
        this.energi -= jam
        return `Halo ${this.nama}, selamat main`
    }
    
    tidur(jam){
        this.energi += jam * 2
        return `Selamat tidur ${this.nama}`
    }
}

let kevin = new Mahasiwa("Kevin", 10)
