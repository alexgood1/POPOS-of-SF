var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
        //   center: new google.maps.LatLng(2.8,-187.3),
        mapTypeId: 'roadmap'
    });

    var script = document.createElement('script');
    script.src = 'https://data.sfgov.org/resource/3ub7-d4yy.json';
    document.getElementsByTagName('head')[0].appendChild(script);
  }

    script.src = 'https://data.sfgov.org/Culture-and-Recreation/Privately-Owned-Public-Open-Spaces/65ik-7wqd/data';
          function resize() {
            var map = document.getElementById("map_canvas");
    
            if (map) {
                map.checkResize();
                map.panTo(new GLatLng(lat,lon));
            }
        }
    
    <body onload="initialize()" onunload="GUnload()" onresize="resize()">
    <div id="map_canvas" style="width: 100%; height: 100%">
    </div>

        var script = document.createElement('script');
        script.src = 'https://data.sfgov.org/Culture-and-Recreation/Privately-Owned-Public-Open-Spaces/65ik-7wqd/data';
        document.getElementsByTagName('head')[0].appendChild(script);
      } 
        script.src = 'https://data.sfgov.org/resource/3ub7-d4yy.json';
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      // Loop through the results array and place a marker for each
      // set of coordinates.
      
      window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
          var coords = results.features[i].geometry.coordinates;
          var latLng = new google.maps.LatLng(coords[1],coords[0]);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map
          });
        }

        initMap();
    
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
          
    });

}


