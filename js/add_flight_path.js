viewer.entities.add({
    name : 'BOS->LAX',
    polyline : { //35k ft, BOS to LAX
        positions : Cesium.Cartesian3.fromDegreesArrayHeights([-71.0096, 42.3656, 10668,
                                                               -118.4085, 33.9416, 10668]),
        width : 10,
        material : new Cesium.PolylineArrowMaterialProperty(Cesium.Color.BLUE)
    }
});

place_user_location(-87.6298, 41.855, Cesium.Math.PI*2.45/3);
function place_user_location(long, lat, direction) {
  viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(long, lat, 10668),
    linkForPick : '/perspective.html',
    billboard : {
        image : '/resources/images/plane-icon.png',
        width : 25,
		height : 25,
    	rotation : direction,
    }
  });
}