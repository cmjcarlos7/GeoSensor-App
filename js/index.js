
var appli = {
  // Application Constructor
  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    updateMap = 0;
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready');
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    // Request to Position
    navigator.geolocation.getCurrentPosition(onSuccess, error, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
    watchMapPosition();
  }
};

/***** Geolocation *****/
// Global variables
var Latitude;
var Longitude;
var updateMap;
// SensorTag object.
var sensortag

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function (position) {
  Latitude = position.coords.latitude;
  Longitude = position.coords.longitude;
  hyper.log(Latitude + ' ' + Longitude)
  $('#lat-value').text("Lat: " + Latitude);
  $('#lon-value').text("Lon: " + Longitude);
  $('.status-sensor-geo').text("Connected");
};

// onError Callback receives a PositionError object
//
error = function onError(error) {
  alert('code: ' + error.code + '\n' +
    'message: ' + error.message + '\n');

}

// Success callback for watching your changing position
var onMapWatchSuccess = function (position) {

  var updatedLatitude = position.coords.latitude;
  var updatedLongitude = position.coords.longitude;

  if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

    Latitude = updatedLatitude;
    Longitude = updatedLongitude;
    //hyper.log("Nueva: " + Latitude + ' ' + Longitude)
    updateMap++;
    if (updateMap > 5) {
      $('#lat-value').text("Lat: " + Latitude);
      $('#lon-value').text("Lon: " + Longitude);
      $('.status-sensor-geo').text("Connected");
      updateMap = 0;
    }
  }
}

// Watch your changing position
function watchMapPosition() {
  return navigator.geolocation.watchPosition
    (onMapWatchSuccess, onWeatherError, { maximumAge: 3000, timeout: 10000, enableHighAccuracy: true });
}

// Error callback
function onWeatherError(error) {
  $('#error').text('code: ' + error.code + ' ' +
    'message: ' + error.message);
}
/****************************** */
$(document).ready(function () {
  appli.initialize();
});

