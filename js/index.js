var app = {
  initialize: function() {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
  },
  onDeviceReady: function() {
    this.receivedEvent("deviceready");
  },

  receivedEvent: function(id) {
    switch (id) {
      case "deviceready":
        console.log("Device Ready to use");
    }
  }
};

$(document).ready(function() {
  app.initialize();
});

function showMessage(text) {
  $(".status-sensor").text(text);
}
function showMessageLuxometer(text) {
  $(".status-sensor-lux").text(text);
}
function showLuxometerValue(text) {
  $("#lux-value").text(text);
}
// Connect Button:
$(".connect-button").click(function(e) {
  e.preventDefault();
});

// Disconnect Button:
$(".disconnect-button").click(function(e) {
  e.preventDefault();
  //hyper.log(device);
});
