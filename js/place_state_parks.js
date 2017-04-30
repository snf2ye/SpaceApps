$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/resources/data/NationalParks.csv",
        dataType: "text",
        success: function(data) {processStateParkData(data);}
     });

    $.ajax({
        type: "GET",
        url: "/resources/data/EnvironmentalData.csv",
        dataType: "text",
        success: function(data) {processEnvironmentalData(data);}
     });
});

function processStateParkData(allText) {
    var lines = [];
    var record_num = 4;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');

    var headings = entries.splice(0,record_num);
    while (entries.length>1) { //for some reason is spitting up undefined row on the last, so exclude it
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            var val = entries.shift();
            tarr.push(val);
        }
		place_marker(tarr[2], tarr[1], tarr[0].replace(/\"/g, ""), '/resources/images/park_symbol.png', tarr[3]);        
        lines.push(tarr);
    }
}

function processEnvironmentalData(allText) {
    var lines = [];
    var record_num = 4;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');

    var headings = entries.splice(0,record_num);
    while (entries.length>1) { //for some reason is spitting up undefined row on the last, so exclude it
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            var val = entries.shift();
            tarr.push(val);
        }
        place_marker(tarr[2], tarr[1], tarr[0].replace(/\"/g, ""), '/resources/images/exc_mark.png', tarr[3]);        
        lines.push(tarr);
    }
}

//For reference //41.638757, -87.564333
place_marker(-86.5861, 34.7304, "HSV", '/resources/images/arrowhead.png', null);
function place_marker(long, lat, name, marker, link) {
  viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(long, lat),
    billboard : {
        image : marker,
        width : 25,
		height : 25
    },
    linkForPick : link,
    label : {
    text : name,
      font : '14pt monospace',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth : 2,
      verticalOrigin : Cesium.VerticalOrigin.TOP,
      pixelOffset : new Cesium.Cartesian2(0, 32)
    }
  });
}

var handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);
handler.setInputAction(function(movement) {
    "use strict";
    var pickedObject = viewer.scene.pick(movement.position);
    if (typeof pickedObject !== 'undefined' && typeof pickedObject.id.linkForPick !== 'undefined') {
    	if(pickedObject.id.linkForPick == '/perspective.html')
        	window.open(pickedObject.id.linkForPick, '_self');
        else
        	window.open(pickedObject.id.linkForPick, '_blank');
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)