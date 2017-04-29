var statePark = viewer.entities.add({
  position : Cesium.Cartesian3.fromDegrees(-86.5861, 34.7304),
  billboard : {
      image : 'http://localhost:8080/resources/images/arrowhead.jpg',
      width : 16,
      height : 16
  },
  label : {
  text : 'National Park',
    font : '14pt monospace',
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    outlineWidth : 2,
    verticalOrigin : Cesium.VerticalOrigin.TOP,
    pixelOffset : new Cesium.Cartesian2(0, 32)
  }
});