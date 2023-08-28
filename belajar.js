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
// const buah = ['apel', 'jeruk', 'durian']
// console.log(buah) 
// console.log(buah[0])
// console.log(buah.length)

// buah.push('sirsak')
// console.log(buah)
// console.log(buah.length)

// buah.length = 2
// console.log(buah)

// buah.length = 10
// console.log(buah)

// buah[1] = 'mangga'
// console.log(buah)

// buah[2] = 'nangka'
// console.log(buah)

// buah[5] = 'lemon'
// console.log(buah)

// console.log(buah[8])

// const klubLigaInggris = ['Manchester City', 'Liverpool', 'Manchester United', 'Chelsea']
// const klubLigaSpanyol = ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla']
// const klubLigaPrancis = ['PSG', 'Marseille']

// const ligaChampions = klubLigaInggris.concat(klubLigaSpanyol, klubLigaPrancis)

// console.log(klubLigaInggris)
// console.log(ligaChampions)
// console.log(ligaChampions.sort().reverse())
// console.log(ligaChampions.filter((kata) => kata.length > 10))

// const filterLigaChampions = ligaChampions.filter(function(kata){
//     return kata === 'Chelsea'
// })
// console.log(filterLigaChampions)

// console.log(ligaChampions.slice(5))
// console.log(ligaChampions.slice(5, 7))
// console.log(ligaChampions.slice(0, 5))

// console.log(ligaChampions.indexOf('Sevilla'))

// OBJECT
// const profileRealMadrid = {
//     liga: 'La Liga',
//     peringkatLiga: 3,
//     negara: 'Spanyol',
//     pelatih: 'Ancelotti',
//     stadion: 'Santiago Bernabeu'
// }

// console.log(profileRealMadrid)
// console.log(profileRealMadrid.pelatih)
// console.log(profileRealMadrid.stadion)

// profileRealMadrid.sponsor = 'Fly Emirates'
// console.log(profileRealMadrid)

// const profilManchesterUnited = {
//     liga: 'Premier League',
//     peringkatLiga: 4,
//     negara: 'Inggris',
//     pelatih: 'Ten Hag',
//     stadion: 'Old Trafford'
// }

// console.log(profilManchesterUnited)

// const profilLigaChampions = [profileRealMadrid, profilManchesterUnited]
// console.log(profilLigaChampions)

// const profileKlubLigaChampions = {
//     realMadrid: profileRealMadrid,
//     manUnited: profilManchesterUnited
// }

// console.log(profileKlubLigaChampions)
// console.log(profileKlubLigaChampions.manUnited.stadion)

// console.log(panitiaAgustusan[0][3])

// OPERATOR
// console.log(5 + 2)
// console.log('Ahmad' + 'Faiz')

// console.log('5' + 2)
// console.log(5 + '2')

// console.log(10 - 4)
// console.log('Faiz' + 'a')

// console.log(5 * 2)
// console.log(5 * '2')
// console.log('5' * 2)
// console.log('Faiz' * 'Geocourse')

// console.log(10 / 2)

// let laptop = 'Asus'
// console.log(laptop)

// laptop = 'HP'
// console.log(laptop)

// console.log(laptop == 'HP')
// console.log(laptop == 'Asus')

// console.log(laptop === 'HP')
// console.log(laptop === 'Asus')

// console.log(laptop !== 'Asus')

// CONDITIONAL
// const kewarganegaraan = 'Indonesia'

// if(kewarganegaraan === 'Indonesia'){
//     console.log('Warga Negara Indonesia')
// } else {
//     console.log('Warga Negara Asing')
// }

// const kota = 'Semarang'

// if(kota === 'Jakarta') {
//     console.log('DKI Jakarta')
// } else if(kota === 'Bandung') {
//     console.log('Jawa Barat')
// } else if(kota === 'Surabaya') {
//     console.log('Jawa Timur')
// } else {
//     console.log('Tidak diketahui')
// }

// FUNCTION
// namaLengkap('John', 'Foe', 'Doe')

// function namaLengkap(namaDepan, namaTengah, namaBelakang) {
//     return console.log(namaDepan + ' ' + namaTengah + ' ' + namaBelakang)
// }

// namaLengkap('Ahmad', 'Zaenun', 'Faiz')
// namaLengkap('Muhammad', 'Budi', 'Santoso')

// Built in feature JavaScript
// const aplikasi = 'zoom'
// console.log(aplikasi)
// console.log(aplikasi.toUpperCase())

// const alat = 'DRONE'
// console.log(alat)
// console.log(alat.toLocaleLowerCase())

// let angka = 5
// const angkaString = String(angka)
// console.log(typeof(angka))
// console.log(typeof(angkaString))

// let orang = prompt('Masukkan nama anda', 'Harry Potetr')
// console.log(orang)
// console.log(typeof(angkaString))

// let angka1 = Number(prompt('Masukkan angka pertama'))
// let angka2 = Number(prompt('Masukkan angka kedua'))

// console.log(angka1 + angka2)
// console.log(typeof(angka1), typeof(angka2))

// EVENT
// document.querySelector("html").addEventListener("click", function() {
//     alert("Anda salah klil");
// });

// const myImage = document.querySelector("img");
// myImage.onclick = () => {
//     const mySrc = myImage.getAttribute("src");
//     if (mySrc === "./google.png") {
//         myImage.setAttribute("src", "./geocourse.png");
//     } else {
//         myImage.setAttribute("src")
//     }
// }; 

// LOOP & ITERATION
// const buah = ['apel', 'jeruk', 'mangga', 'melon', 'durian', 'nangka']
// console.log(buah)

// console.log(`Saya makan ${buah[0]}`)
// console.log(`Saya makan ${buah[1]}`)
// console.log(`Saya makan ${buah[2]}`)

// function makanBuah(urutan){
//     return console.log(`Saya makan ${buah[urutan]}`)
// }

// // buah.push('cempedak')
// // console.log(buah)

// makanBuah(0)
// makanBuah(1)
// makanBuah(2)

// let urutan = 0
// console.log(urutan)

// urutan = urutan + 1
// urutan++
// console.log(urutan)

// console.log(buah.length)

// for(let urutan = 0; urutan < buah.length; urutan++){
//     console.log(`Saya makan ${buah[urutan]}`)
// }

// const panitiaAgustusan = [
//     ['Andi', 'Warga', 24, true],
//     ['Budi', 'Warga', 28, true],
//     ['Putri', 'Warga', 22, false]
// ]

// console.log(panitiaAgustusan[1][3])
// console.log(panitiaAgustusan[2][3])

// let urutan = 0
// while (panitiaAgustusan[urutan][3]){
//     console.log(`Namanya adalah ${panitiaAgustusan[urutan][0]}, statusnya ${panitiaAgustusan[urutan][1]}, umurnya ${panitiaAgustusan[urutan][2]}`)
//     urutan++
// }

// angka = [63, 59, 75, 69, 12]
// while(angka[urutan] > 50){
//     console.log(angka[urutan])
//     urutan++
// }

// 📖DOM MANIPULATION
//console.log(document.head.title) //cannot access title element
//console.log(document.getElementsByTagName('title'))
// console.log(document.childElementCount)
// console.log(document.head.childElementCount)
// console.log(document.head.children)
// console.log(document.head.children[2])

// const testingDom = document.head
// testingDom.push('Hello World')
// console.log(testingDom)

// 📖DOM MANIPULATION - Change Innert HTML

// let judul1 = document.getElementsByTagName('h1')

// judul1[5].innerHTML = 'Geocourse.id'

// console.log(document.getElementsByTagName('h1')[0].innerHTML)

// const judulUbah = document.getElementsByClassName('ubah')
// judulUbah[0].innerHTML = 'Geocourse.id'
// console.log(judulUbah)

// const judulItem1 = document.getElementById('item-1')
// judulItem1.innerHTML = 'Geocourse.id'
// console.log(judulItem1)

// const test = document.getElementsByTagName('h1')
// console.log(test)

//  for(let i = 0; i < test.length;i++) {
//     test[i].innerHTML = 'Geocourse.id'
//  }

const judulUbah = document.getElementsByClassName('ubah')
judulUbah[0].innerHTML = 'Geocourse.id'

 for(let i = 0; i < judulUbah.length; i++) {
    judulUbah[i].innerHTML = 'WebGIS'
 }

// 📖 DOM Manipulation - HTML Attribute
const judul = document.getElementsByTagName('h1')
judul[6].className = 'testing'
// judul[6].id = 'item-25'
judul[6].setAttribute('id', 'item-50')
judul[6].style.color = 'green'
judul[6].style.fontFamily = 'arial'

console.log(judul[6])

// 📖 DOM Manipulation - add and delete element
const paragraf = document.createElement('p')
paragraf.innerHTML = 'Lorem Ipsum'
// document.body.appendChild(paragraf)
judul[6].appendChild(paragraf)

console.log(document.getElementsByTagName('body')[0])
