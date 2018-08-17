// https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false
// //code.jquery.com/jquery-1.11.0.min.js

var map;

// The JSON data
var json = [
  {
    id: 48,
    title: "Helgelandskysten",
    longitude: "12.63376",
    latitude: "66.02219"
  },
  { id: 46, title: "Tysfjord", longitude: "16.50279", latitude: "68.03515" },
  {
    id: 44,
    title: "Sledehunds-ekspedisjon",
    longitude: "7.53744",
    latitude: "60.08929"
  },
  {
    id: 43,
    title: "Amundsens sydpolferd",
    longitude: "11.38411",
    latitude: "62.57481"
  },
  { id: 39, title: "Vikingtokt", longitude: "6.96781", latitude: "60.96335" },
  {
    id: 6,
    title: "Tungtvann- sabotasjen",
    longitude: "8.49139",
    latitude: "59.87111"
  }
];

function initialize() {
  // Giving the map som options
  var mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(66.02219, 12.63376)
  };

  // Creating the map
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // Looping through all the entries from the JSON data
  for (var i = 0; i < json.length; i++) {
    // Current object
    var obj = json[i];

    // Adding a new marker for the object
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(obj.latitude, obj.longitude),
      map: map,
      title: obj.title // this works, giving the marker a title with the correct title
    });

    // Adding a new info window for the object
    var clicker = addClicker(marker, obj.title);
  } // end loop

  // Adding a new click event listener for the object
  function addClicker(marker, content) {
    google.maps.event.addListener(marker, "click", function() {
      if (infowindow) {
        infowindow.close();
      }
      infowindow = new google.maps.InfoWindow({ content: content });
      infowindow.open(map, marker);
    });
  }
}

// Initialize the map
initialize();
