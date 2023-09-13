const peta = L.map('peta')
peta.setView([0, 110], 5);

const atribusiOSM = {
    attribution: '<a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a>'
};

const basemapOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', atribusiOSM)
basemapOSM.addTo(peta)

const basemapNaturalEarth = L.tileLayer('https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png')
// basemapNaturalEarth.addTo(peta)

// const optionTitik = {
//     opacity: 0.7
// }

// const titik = L.marker([-6.2056, 106.8297], optionTitik)
// titik.addTo(peta);

// const popupTitik = `
//   <h1>Jakarta</h1>
//   <a target='_blank' href="https://www.jakarta.go.id/">
//     <img height="100" src='https://www.jakarta.go.id/uploads/contents/content--20230330031636.png'>
//   </a>
//   `



// titik.bindPopup(popupTitik)

// const optionLingkaran = {
//     radius: 100000,
//     opacity: 0.5
// }

// const lingkaran = L.circle([-2.9693, 104.7714], optionLingkaran)
// // lingkaran.addTo(peta)

// const koordinatPolygon = [
//     [0, 100], // vertex 1
//     [-5, 100], // vertex 2
//     [-5, 110], // vertex 3
//     [0, 110] // vertex 4
// ]

// const optionPolygon = {
//     color: 'green',
//     opacity: 0.3
// }

// const polygon = L.polygon(koordinatPolygon, optionPolygon)
// // polygon.addTo(peta)

// const polyline = L.polyline(koordinatPolygon);
// // polyline.addTo(peta)

// const koordinatPolygonLubang = [
//     [
//       [0, 100], // vertex 1
//       [-5, 100], // vertex 2
//       [-5, 110], // vertex 3
//       [0, 110] // vertex 4
//     ], // koordinat utama
//     [
//       [-2, 105], // vertex 1
//       [-3, 106], // vertex 2
//       [-3, 107]
//     ], // koordinat lubang 1
//     [
//       [-1, 105],
//       [-2, 106],
//       [-2, 107]
//     ]
// ]

// const polygonLubang = L.polygon(koordinatPolygonLubang)
// // polygonLubang.addTo(peta)

// const koordinatMultiPolygon = [
//     [
//         [0, 100], // vertex 1
//         [-5, 100], // vertex 2
//         [-5, 110], // vertex 3
//         [0, 110] // vertex 4
//     ], // koordinat utama
//     [
//         [-2, 105], // vertex 1
//         [-3, 106], // vertex 2
//         [-3, 107]
//     ], // koordinat lubang 1
//     [
//         [-1, 105],
//         [-2, 106],
//         [-2, 107]
//     ], // Polygon part 1
//     [
//         [0, 120], // koordinat utama
//         [-5, 120],
//         [-5, 130],
//         [0, 130]
//     ] // Polygon part 2
// ]

// const multiPolygon = L.polygon(koordinatMultiPolygon)
// // multiPolygon.addTo(peta)

// const eventClick = function(e) {
//     const koordinat = e.latlng
//     const y = koordinat.lat
//     const x = koordinat.lng

//     const titikEvent = L.marker([y, x])
//     return titikEvent.addTo(peta);
// }

// // peta.on('click', eventClick)

// let koordinatEventPolygon = []

// const eventClickPolygon = function(e) {
//     const koordinat = e.latlng
//     const y = koordinat.lat
//     const x = koordinat.lng
    
//     koordinatEventPolygon.push([y,x])
    
//     eventPolygon = L.polygon(koordinatEventPolygon)
// }

// peta.on('click', eventClickPolygon)

// const buttonSubmit = document.createElement('button')
// buttonSubmit.innerHTML = 'SUBMIT'
// document.body.appendChild(buttonSubmit)

// buttonSubmit.onclick = function() {
//     return eventPolygon.addTo(peta)
// }

// const buttonReset = document.createElement('button')
// buttonReset.innerHTML = 'RESET'
// document.body.appendChild(buttonReset)

// buttonReset.onclick = function() {
//     return koordinatEventPolygon = []
// }

function getKoordinat(e) {
    console.log(e.latlng)
}

peta.on('click', getKoordinat)

const jakarta = L.marker([-6.2056, 106.8297])
jakarta.addTo(peta)

const medan = L.marker({lat: 3.5300750134163437, lng: 98.65754558067957})
medan.addTo(peta)