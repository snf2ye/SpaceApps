$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "/resources/data/NationalParks.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

var lines = [];
function processData(allText) {
    var record_num = 3;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');

    var headings = entries.splice(0,record_num);
    while (entries.length>1) { //for some reason is spitting up undefined row on the last, so exclude it
        var tarr = [];
        for (var j=0; j<record_num; j++) {
            var val = entries.shift();
            tarr.push(val);
        }
		place_marker(tarr[2], tarr[1], tarr[0].replace(/\"/g, ""), '/resources/images/arrowhead.jpg');        
        lines.push(tarr);
    }
}

function place_marker(long, lat, name, marker) {
  viewer.entities.add({
    position : Cesium.Cartesian3.fromDegrees(long, lat),
    billboard : {
        image : marker,
        width : 16,
        height : 16
    },
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