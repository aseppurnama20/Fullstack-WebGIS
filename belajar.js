// PENGENALAN TIPE DATA
// console.log("Hello World")

// const myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello World!"

// let myVariable = null;
// console.log(myVariable)

// let payung;
// console.log(payung)
// console.log(typeof(payung))

// let indonesia = true;
// console.log(indonesia)

// let angka = 1 === 1
// console.log(angka)

// let angka1 = 1
// let angka2 = 5
// console.log(typeof(angka1), typeof(angka2))

// VARIABEL LET, CONST, & VAR
// VAR VARIABLE = Global variable

// LET and CONST VARIABLE = block-scope local variable. The different is Let Variable replaceable when redifine while const is unreplaceable
// let nama = "Bambang"
// console.log(nama)

// nama = "Asep"
// console.log(nama)

// const phi = 3.14;
// console.log(phi)

// const myImage = document.querySelector("img");

// // JAVASCRIPT STANDARD
// console.log('Asep')
// console.log("Geocourse.id") //hindari

// const jakarta = 'Ibukota Negara'
// const bandung = 'Ibukota Provinsi'
// const cibinong = 'Ibukota Kabupaten'

// console.log('terdapat status' + ' ' + jakarta + ', ' + bandung + ', ' + cibinong)

// let kota = 'jakarta'
// let suhu = 25

// const myFunction = function(){
//     console.log(kota)
// }

// ARRAY
const buah = ['apel', 'jeruk', 'durian']
console.log(buah) 
console.log(buah[0])

buah.push('sirsak')
console.log(buah)

// OBJECT
const profileRealMadrid = {
    liga: 'La Liga',
    peringkatLiga: 3,
    negara: 'Spanyol',
    pelatih: 'Ancelotti',
    staion: 'Santiago Bernabeu'
}

console.log(profileRealMadrid)

profileRealMadrid.sponsor = 'Fly Emirates'
console.log(profileRealMadrid)

const panitiaAgustusa = [
    ['Andi', 'Warga', 24, true],
    ['Budi', 'Warga', 28, true],
    ['Putri', 'Warga', 22, false]
]

// console.log(panitiaAgustusan[0][3])