import Map from './ol/Map.js';
import Tile from './ol/layer/Tile.js';
import View from './ol/View.js';
import OSM from './ol/source/OSM.js';
import FullScreen from './ol/control/FullScreen.js';
import MousePosition from './ol/control/MousePosition.js';
import { toStringHDMS } from './ol/coordinate.js';
import Rotate from './ol/control/Rotate.js';
import OverviewMap from './ol/control/OverviewMap.js';
import BingMaps from './ol/source/BingMaps.js';
import Stamen from './ol/source/Stamen.js';
// import {
//     DragRotateAndZoom,
//     defaults as 
// }

// 📖 Non ES6 Configuration - without Import Module
// const peta = new ol.Map({
    // layers: [
    //     new ol.layer.Tile({
    //         source: new ol.source.OSM()
    //     })
    // ],
    // view: new ol.View({
    //     projection:'EPSG:4326',
    //     center: [110, 6],
    //     zoom: 5
    // }),
    // target: 'peta'
// })

// 📖 ES6 - Using Import Module
const peta = new Map({
    // layers: [
    //     new ol.layer.Tile({
    //         source: new ol.source.OSM()
    //     })
    // ],
    // view: new ol.View({
    //     projection:'EPSG:4326',
    //     center: [110, 6],
    //     zoom: 5
    // }),
    target: 'peta'
})

const layerOSM = new Tile({
    source: new OSM()
})
peta.addLayer(layerOSM)

const layerOSMInset = new Tile({
    source: new Stamen({
        layer: 'watercolor'
    })
})
// peta.addLayer(layerOSMInset)

const petaView = new View({
    projection:'EPSG:4326',
    center: [120, 7],
    zoom: 4
})
peta.setView(petaView)

const fullScreenView = new FullScreen()
peta.addControl(fullScreenView)

const mousePosition = new MousePosition({
    // projection: 'EPSG: 3857',
    coordinateFormat: toStringHDMS
})
peta.addControl(mousePosition)

const putarPeta = new Rotate()
peta.addInteraction(putarPeta)

const inset = new OverviewMap({
    layers: [layerOSMInset]
})
peta.addControl(inset)

// const dragRotate = new 