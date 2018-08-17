function promisedPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  
  function getPosition() {
    return promisedPosition()
      .then(function (position) {
        let userCoordinates = {};
        userCoordinates.latitude = position.coords.latitude;
        userCoordinates.longitude = position.coords.longitude;
        return userCoordinates;
      })
      .catch(function (err) {
        console.error(err.message);
      });
  }
  



Get Current Position

var watchId = false;
function watchPosition()
{
if (navigator.geolocation)
{
watchId = navigator.geolocation.watchPosition(successPosition, failurePosition, {
enableHighAccuracy: false,
timeout:1000,
maximumAge: 4000
});
}
else
document.getElementById("result").innerHTML = "Your browser does not support Geolocation API!!!";
}
function failurePosition(error)
{
alert("Error Code: " + error.code + " Error Message: " + error.message);
}
function stopWatching()
{
navigator.geolocation.clearWatch(watchId);
}
function successPosition(position)
{
var lat = position.coords.latitude;
var long = position.coords.longitude;
document.getElementById("result").innerHTML = "Latitude: " + lat + "<br />Longitude: " + long;
}