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

// 📖 Styling Feature
// function getKoordinat(e) {
//     console.log(e.latlng)
// }

// peta.on('click', getKoordinat)

// const iconMerah = L.icon({
//     iconUrl: './asset/image/point1.png',
//     iconSize: [40, 40],
//     iconAnchor: [20, 30],
//     shadowUrl: './leaflet/images/marker-shadow.png',
//     shadowSize: [50, 50],
//     shadowAnchor: [17, 46]
// })

// const iconBiru = L.icon({
//     iconUrl: './asset/image/point2.png',
//     iconSize: [40, 40],
//     iconAnchor: [20, 30],
//     shadowUrl: './leaflet/images/marker-shadow.png',
//     shadowSize: [50, 50],
//     shadowAnchor: [17, 46]
// })

// const jakarta = L.marker([-6.2056, 106.8297])
// jakarta.addTo(peta)

// const medan = L.marker({lat: 3.5300750134163437, lng: 98.65754558067957}, {
//     icon: iconMerah
// })
// medan.addTo(peta)
// medan.bindPopup('Medan')

// const makassar = L.marker({lat: -5.153760690296487, lng: 119.42156009819541}, {
//     icon: iconBiru
// })
// makassar.addTo(peta)
// makassar.bindPopup('Makassar')

// const koordinatWilayah = [
//     [
//         [0.3883637923855354, 112.37406410737786],
//         [-0.5344770444698392, 115.80398992761823],
//         [-2.906284582445359, 115.49617607195563],
//         [-2.3355955006201783, 111.5825427642455]
//     ],
//     [
//         [-0.8860119821185297, 113.47339930617287],
//         [-0.9738910219712407, 114.52876109701604],
//         [-1.5450396994250115, 113.25353226641388]
//     ]
// ]

// const optionWilayah = {
//     color: 'green',
//     stroke: false,
//     weight: 5,
//     opacity: 0.5,
//     dashArray: 20,
//     dashOffset: 10,
//     lineCap: 'square',
//     fill: true,
//     fillColor: 'blue',
//     fillOpacity: 0.4,
//     fillRule: 'evenodd'
// }

// let wilayah = L.polygon(koordinatWilayah, optionWilayah)
// wilayah.addTo(peta)
// // wilayah.bindPopup('Hutan Hujan Tropis')

// const tampilGaris = document.createElement('button')
// tampilGaris.innerHTML = 'Tombol Garis'
// document.body.appendChild(tampilGaris)

// tampilGaris.onclick = function() {
//   const ubahGaris = function(kondisi) {
//     peta.removeLayer(wilayah)
//     const x = optionWilayah.stroke = kondisi
//     // console.log(x)
//     wilayah = L.polygon(koordinatWilayah, optionWilayah)
//     wilayah.addTo(peta)
//   }

//   if(optionWilayah.stroke === false){
//     ubahGaris(true)
//   } else {
//     ubahGaris(false)
//   }
// }

// const tambahUkuran = document.createElement('button')
// tambahUkuran.innerHTML = 'Tambah Ukuran Garis'
// document.body.appendChild(tambahUkuran)

// tambahUkuran.onclick = function() {
//     peta.removeLayer(wilayah)
//     const x = optionWilayah.weight += 1
//     wilayah = L.polygon(koordinatWilayah, optionWilayah)
//     wilayah.addTo(peta)
// }

// const kurangUkuran = document.createElement('button')
// kurangUkuran.innerHTML = 'Kurang Ukuran Garis'
// document.body.appendChild(kurangUkuran)

// kurangUkuran.onclick = function() {
//     peta.removeLayer(wilayah)
//     const x = optionWilayah.weight -= 1
//     wilayah = L.polygon(koordinatWilayah, optionWilayah)
//     wilayah.addTo(peta)
// }

// 📖 GeoJSON
// function getKoordinat(e) {
//     console.log(e.latlng)
// }

// peta.on('click', getKoordinat)

// const data = {
//     type: 'Feature',
//     geometry: {
//         type: 'Point',
//         coordinates: [110.41362314024069, -7.069957050653489]
//     },
//     properties: {
//         nama: 'Semarang',
//         status: 'Kota'
//     }
// }

fetch('./asset/data/kota.geojson')
  .then(response => response.json())
  .then(function(json){
    const dataGeoJson = L.geoJSON(json, {
        onEachFeature: function(feature, layer){
            layer.bindPopup(feature.properties.nama)
        }
    })
    dataGeoJson.addTo(peta)
    // dataGeoJson.bindPopup('Jakarta')
    // console.log(json)
  })

// const dataGeoJSON = L.geoJSON(data)
// dataGeoJSON.addTo(peta)