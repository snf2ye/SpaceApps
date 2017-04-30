var layers = viewer.imageryLayers;
var pop_dense = layers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
        url : 'https://server.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Population_Density/MapServer'
    }));
pop_dense.splitDirection = Cesium.ImagerySplitDirection.LEFT; // Only show to the left of the slider.

// Sync the position of the slider with the split position
var slider = document.getElementById('slider');
viewer.scene.imagerySplitPosition = (slider.offsetLeft) / slider.parentElement.offsetWidth;

var dragStartX = 0;

document.getElementById('slider').addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

function mouseUp() {
  window.removeEventListener('mousemove', sliderMove, true);
}

function mouseDown(e) {
  var slider = document.getElementById('slider');
  dragStartX = e.clientX - slider.offsetLeft;
  window.addEventListener('mousemove', sliderMove, true);
}

function sliderMove(e) {
  var slider = document.getElementById('slider');
  var splitPosition = (e.clientX - dragStartX) / slider.parentElement.offsetWidth;
  slider.style.left = 100.0 * splitPosition + "%";
  viewer.scene.imagerySplitPosition = splitPosition;
}

