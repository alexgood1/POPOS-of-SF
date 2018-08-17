function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successfulPosition);
  } else
    document.getElementById("result").innerHTML =
      "Your browser does not support HTML5 Geolocation";
}

function successfulPosition(location) {
  var lat = location.coords.latitude;

  var long = location.coords.longitude;

  document.getElementById("result").innerHTML =
    "Latitude: " + lat + "<br />Longitude: " + long;

  alert("Altitude: " + location.coords.altitude);

  alert("Accuracy: " + location.coords.accuracy);

  alert("Altitude Accuracy: " + location.coords.altitudeAccuracy);

  alert("Direction: " + location.coords.heading);

  alert("Speed: " + location.coords.speed);

  alert("Time: " + location.timestamp);
}

getLocation();
