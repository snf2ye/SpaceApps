Cesium.BingMapsApi.defaultKey = 'Aou0pmPMbGyDeG1aXoHc4veeGTPqnh_32hxgp3Rx2ybLiiMdnHvFKHROIR7AaMpg';

var rectangle = Cesium.Rectangle.fromDegrees(-125, 30, -65, 50);

Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle;

var viewer = new Cesium.Viewer('cesiumContainer');
var terrainProvider = new Cesium.CesiumTerrainProvider({
    url : '//assets.agi.com/stk-terrain/world'
});
viewer.terrainProvider = terrainProvider;