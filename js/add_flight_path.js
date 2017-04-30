viewer.entities.add({
    name : 'flight 1',
    polyline : { //35k ft, BOS to LAX
        positions : Cesium.Cartesian3.fromDegreesArrayHeights([-71.0096, 42.3656, 10668,
                                                               -118.4085, 33.9416, 10668]),
        width : 10,
        material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.BLUE)
    }
});