//https://cesiumjs.org/tutorials/Camera-Tutorial/

var alt = 20000;
var startLong = -87.6298;
var startLat = 41.855;

viewer.camera.setView({
    destination : new Cesium.Cartesian3.fromDegrees(startLong, startLat, alt),
    orientation: {
        heading : -Cesium.Math.PI_OVER_TWO*1.09,
        pitch : -Cesium.Math.PI_OVER_TWO/8,
        roll : 0.0
    }
});

var canvas = viewer.canvas;
canvas.setAttribute('tabindex', '0'); // needed to put focus on the canvas
canvas.onclick = function() {
    canvas.focus();
};
var ellipsoid = viewer.scene.globe.ellipsoid;

// disable the default event handlers
viewer.scene.screenSpaceCameraController.enableRotate = false;
viewer.scene.screenSpaceCameraController.enableTranslate = false;
viewer.scene.screenSpaceCameraController.enableZoom = true;
viewer.scene.screenSpaceCameraController.minimumZoomDistance  = 1000;
viewer.scene.screenSpaceCameraController.maximumZoomDistance  = alt;
viewer.scene.screenSpaceCameraController.enableTilt = false;
viewer.scene.screenSpaceCameraController.enableLook = false;

var startMousePosition;
var mousePosition;
var flags = {
    looking : false,
    moveForward : false,
    moveBackward : false,
    moveUp : false,
    moveDown : false,
    moveLeft : false,
    moveRight : false,
    progressInFlight : false
};

var handler = new Cesium.ScreenSpaceEventHandler(canvas);

handler.setInputAction(function(movement) {
    flags.looking = true;
    mousePosition = startMousePosition = Cesium.Cartesian3.clone(movement.position);
}, Cesium.ScreenSpaceEventType.LEFT_DOWN);

handler.setInputAction(function(movement) {
    mousePosition = movement.endPosition;
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

handler.setInputAction(function(position) {
    flags.looking = false;
}, Cesium.ScreenSpaceEventType.LEFT_UP);

function getFlagForKeyCode(keyCode) {
    switch (keyCode) {
    case 'W'.charCodeAt(0):
        return 'moveForward';
    case 'S'.charCodeAt(0):
        return 'moveBackward';
    case 'Q'.charCodeAt(0):
        return 'moveUp';
    case 'E'.charCodeAt(0):
        return 'moveDown';
    case 'D'.charCodeAt(0):
        return 'moveRight';
    case 'A'.charCodeAt(0):
        return 'moveLeft';
    default:
        return undefined;
    }
}

document.addEventListener('keydown', function(e) {
    var flagName = getFlagForKeyCode(e.keyCode);
    if (typeof flagName !== 'undefined') {
        flags[flagName] = true;
    }
}, false);

document.addEventListener('keyup', function(e) {
    var flagName = getFlagForKeyCode(e.keyCode);
    if (typeof flagName !== 'undefined') {
        flags[flagName] = false;
    }
}, false);

viewer.clock.onTick.addEventListener(function(clock) {
    var camera = viewer.camera;

    if (flags.looking) {
        var width = canvas.clientWidth;
        var height = canvas.clientHeight;

        // Coordinate (0.0, 0.0) will be where the mouse was clicked.
        var x = (mousePosition.x - startMousePosition.x) / width;
        var y = -(mousePosition.y - startMousePosition.y) / height;

        var lookFactor = 0.05;
        camera.lookRight(x * lookFactor);
        camera.lookUp(y * lookFactor);
    }

        // Change movement speed based on the distance of the camera to the surface of the ellipsoid.
    var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
    var moveRate = cameraHeight / 100.0;
    var lookRate = Cesium.Math.PI_OVER_TWO/16;

    if (flags.moveForward) {
        camera.lookUp(lookRate);
    }
    if (flags.moveBackward) {
        camera.lookDown(lookRate);
    }
    if (flags.moveLeft) {
        camera.lookLeft(lookRate);
    }
    if (flags.moveRight) {
        camera.lookRight(lookRate);
    }
});
