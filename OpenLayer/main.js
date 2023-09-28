import Map from './ol/Map.js';
import Tile from './ol/layer/Tile.js'
import View from './ol/View.js'

const peta = new ol.Map({
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        projection:'EPSG:4326',
        center: [110, 6],
        zoom: 2
    }),
    target: 'peta'
})