Cesium.BingMapsApi.defaultKey = 'Aou0pmPMbGyDeG1aXoHc4veeGTPqnh_32hxgp3Rx2ybLiiMdnHvFKHROIR7AaMpg';
var viewer = new Cesium.Viewer('cesiumContainer');
var terrainProvider = new Cesium.CesiumTerrainProvider({
    url : '//assets.agi.com/stk-terrain/world'
});
viewer.terrainProvider = terrainProvider;