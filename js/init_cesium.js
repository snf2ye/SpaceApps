var viewer = new Cesium.Viewer('cesiumContainer');
var terrainProvider = new Cesium.CesiumTerrainProvider({
    url : '//assets.agi.com/stk-terrain/world'
});
viewer.terrainProvider = terrainProvider;