function initMap() {
  // map options
  let options = {
    zoom: 15,
    center: { lat: 37.781278, lng: -122.399572 }
  };
  // new map
  const map = new google.maps.Map(document.getElementById("map"), options);

  // array of markers
  let markers = [
    {
      coords: { lat: 37.79374, lng: -122.401459 },
      content:
        "<h2>343 Sansome</h2><h3>View Terrace</h3><p>(M-F: 10am - 5pm)</p><p>15th floor terrace with excellent views of surrounding buildings, streets, and of the San Francisco Bay.</p>"
    },
    {
      coords: { lat: 37.79107, lng: -122.393049 },
      content:
        "<h2>120 Howard St</h2><h3>Urban Garden</h3><p>(8am - 6pm)</p><p>Interior courtyard between buildings.</p>"
    },
    {
      coords: { lat: 37.7891, lng: -122.397969 },
      content:
        "<h2>100 1st St</h2><h3>Indoor Park(Ground Level) & Sun Terrace</h3><p>(Ground Level accessible at all times; Sun Terrace open during daylight hours)</p><p>Ground Level Indoor Park is on Mission St side. Grand staircase leading up to the Sun Terrace on 2nd level.</p>"
    },
    {
      coords: { lat: 37.79439, lng: -122.402279 },
      content:
        "<h2>Commercial St @ 235 Pine St</h2><h3>Linear Park</h3><p>(M-F: 8am - 6pm)</p><p>Features concrete linear seating and faces several cafés and restaurants.</p>"
    },
    {
      coords: { lat: 37.792459, lng: -122.403951 },
      content:
        "<h2>555 California St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Located at the elevated plaza along California St.</p>"
    },
    {
      coords: { lat: 37.78638, lng: -122.398229 },
      content:
        "<h2>222 2nd St</h2><h3>Lobby</h3><p>(M-F: 8am - 6pm)</p><p>Enclosed open space on the ground floor lobby.</p>"
    },
    {
      coords: { lat: 37.789023574000055, lng: -122.39978307299998 },
      content:
        "<h2>71 Stevenson St</h2><h3>Pedestrian Walkways</h3><p>(Open at all times)</p><p>The open space connects Stevenson St and Jessie St and features a water fountain, plants, and seating with a table of outside café.</p>"
    },
    {
      coords: { lat: 37.78880000000004, lng: -122.39827999999994 },
      content:
        "<h2>535 Mission St</h2><h3>Pedestrian-Only Alleyway</h3><p>(M-F: 8am - 6pm)</p><p>Alleyway connecting Mission and Minna Streets.</p>"
    },
    {
      coords: { lat: 37.79160342100005, lng: -122.39691639099999 },
      content:
        "<h2>50 Beale St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Large well-landscaped plaza with plenty of seating.</p>"
    },
    {
      coords: { lat: 37.79446000000007, lng: -122.40124999999995 },
      content:
        "<h2>Embarcadero Center West 1, 2, & 3</h2><h3>Pedestrian Walkway</h3><p>(Open at all times)</p><p>Commercial street in a pedestrian mall on ground floor and 2nd levels. Accessed by elaborate staircase, lined with waterfalls, fountains, foliage, art work, and bench seating.</p>"
    },
    {
      coords: { lat: 37.787840000000074, lng: -122.40375999999998 },
      content:
        "<h2>1 Kearny St</h2><h3>Sun Terrace</h3><p>(M-F: 9am - 5pm)</p><p>Rooftop terrace with extensive views of Market St. and rooftop architecture of nearby buildings. Landscaping and bench seating.</p>"
    },
    {
      coords: { lat: 37.788200000000074, lng: -122.39609999999999 },
      content:
        "<h2>Foundry Square SW @ 505-525 Howard St</h2><h3>Plaza</h3><p>(M-F: 8am - 6pm)</p><p>Plaza is near main building entrance.</p>"
    },
    {
      coords: { lat: 37.79034280900004, lng: -122.39973689899995 },
      content:
        "<h2>525 Market St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Two-level open space with granite water fountains on the sidewalk level near Market Street and a view to the landscaped space on second level.</p>"
    },
    {
      coords: { lat: 37.79034280900004, lng: -122.39973689899995 },
      content:
        "<h2>199 Fremont St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Two-level open space with granite water fountains on the sidewalk level near Market Street and a view to the landscaped space on second level.</p>"
    },
    {
      coords: { lat: 37.79428000000007, lng: -122.40383999999995 },
      content:
        "<h2>Empire Park @ 642 Commercial Street</h2><h3>Urban Park</h3><p>(Open at all times)</p><p>Two-level open space with granite water fountains on the sidewalk level near Market Street and a view to the landscaped space on second level.</p>"
    },
    {
      coords: { lat: 37.78576000000004, lng: -122.39667999999995 },
      content:
        "<h2>Marriot Courtyard - B @ 299 2nd St</h2><h3>Snippet</h3><p>(M-F: 8am - 5pm)</p><p>Open space with small sitting spot below street level on the corner of Folsom and 2nd Street.</p>"
    },
    {
      coords: { lat: 37.78516764500006, lng: -122.39673062499998 },
      content:
        "<h2>611 Folsom St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Brick plaza with trees, artwork, and seating on brick structures.</p>"
    },
    // {
    //   coords: { lat: 37.78975721900008, lng: -122.40015789499995 },
    //   content:
    //     "<h2>555-557 Market St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>This space is between two high rises and signified by extensive landscaping and water features. Seating, however, is only availabe to employees.</p>"
    // },
    // {
    //   coords: { lat: 37.79015361900008, lng: -122.39254577399998 },
    //   content:
    //     "<h2>221 Main St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>An open plaza with some seating and landscaping.</p>"
    // },
    {
      coords: { lat: 37.79219000000006, lng: -122.39423 },
      content:
        "<h2>123 Mission St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>This large plaza features extensive landscaping and art with seperate seating areas. Located in front of building.</p>"
    },
    {
      coords: { lat: 37.790479823000055, lng: -122.40079790699997 },
      content:
        "<h2>Citygroup Center @ 1 Sansome St</h2><h3>Greenhouse</h3><p>(M-F: 8am - 5pm)</p><p>Built with marble and covered with glass, this greenhouse provides ample seating and tables.</p>"
    },
    {
      coords: { lat: 37.78825000000006, lng: -122.39603999999997 },
      content:
        "<h2>505-525 Howard St</h2><h3>Outdoor Plaza & Indoor Park</h3><p>(M-F: 8am - 6pm)</p><p>Street level outdoor plaza and indoor park with seating and a café.</p>"
    },
    {
      coords: { lat: 37.79358000000008, lng: -122.39796999999999 },
      content:
        "<h2>100 California St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Exterior Plazas and Walkways on ground level.</p>"
    },
    {
      coords: { lat: 37.78577000000007, lng: -122.39683999999994 },
      content:
        "<h2>Marriot Courtyard - A @ 299 2nd St</h2><h3>Snippet</h3><p>(M-F: 8am - 5pm)</p><p>This open space has benches and landscaping along the sidewalk on Folsom at street level.</p>"
    },
    {
      coords: { lat: 37.78522000000004, lng: -122.39569999999998 },
      content:
        "<h2>Marathon Plaza @ 303 2nd St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Large, triangular urban garden facing 2nd Street with a water feature, plenty of seating, and lush landscaping. Deli and restaurant open to the park provide food and additional seating.</p>"
    },
    {
      coords: { lat: 37.790766407000035, lng: -122.39788897999995 },
      content:
        "<h2>14 Fremont St</h2><h3>Pedestrian Walkways</h3><p>(Open at all times)</p><p>This open space is a through walkway between Fremont and 1st Street that opens into an interior plaza.</p>"
    },
    {
      coords: { lat: 37.79061800000005, lng: -122.40271699999994 },
      content:
        "<h2>Trinity Alley @ 333 Bush St</h2><h3>Pedestrian Walkways</h3><p>(Open at all times)</p><p>Alleyway for pedestrians.</p>"
    },
    {
      coords: { lat: 37.78895000000006, lng: -122.40010999999998 },
      content:
        "<h2>55 2nd St - B</h2><h3>Snippet</h3><p>(M-F: 8am - 6pm)</p><p>Located at the end of Anthony Street at the Jessie Street entrance to the building. Planter boxes serve as seating throughout the plaza.</p>"
    },
    {
      coords: { lat: 37.79335342500008, lng: -122.39728414299998 },
      content:
        "<h2>1 California St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Wrap around plaza area with seating near food services.</p>"
    },
    {
      coords: { lat: 37.79324900000006, lng: -122.39799999999997 },
      content:
        "<h2>101 California St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Street level plaza at California and Davis Streets.</p>"
    },
    {
      coords: { lat: 37.77613000000008, lng: -122.41970999999995 },
      content:
        "<h2>77 Van Ness Ave</h2><h3> Indoor Park</h3><p>(M-F: 8am – 6pm)</p><p>This space is in the front lobby of 77 Van Ness. It has tables and chairs and features a sculpture.</p>"
    },
    {
      coords: { lat: 37.78852000000006, lng: -122.39565999999996 },
      content:
        "<h2> Foundry Square SE @ 405 Howard St </h2><h3> Plaza</h3><p>(M-F: 8am – 6pm)</p><p>This is one of three plazas on the 1st and Howard Street intersection forming Foundry Square. This space features a sculpture, landscaping, and seating near food services.</p>"
    },
    {
      coords: { lat: 37.78189000000003, lng: -122.40482999999995 },
      content:
        "<h2>Intercontinental Hotel Pacific Terrace @ 888 Howard St</h2><h3>View Terrace</h3><p>(M-F: 9am – 5pm)</p><p>The Intercontinental Hotel provides two POPOS on the fourth and sixth floors. They have various seating arrangements and landscaping, each with views of the city.</p>"
    },
    {
      coords: { lat: 37.793807462000075, lng: -122.39753051499997 },
      content:
        "<h2>50 California St</h2><h3>Snippet</h3><p>(Open at all times)</p><p>Plaza and wrap around walkway with seating along planters.</p>"
    },
    {
      coords: { lat: 37.78900185600003, lng: -122.40072728999996 },
      content:
        "<h2>595 Market St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>This plaza is located on 2nd and Stevenson Street. Seating is only available on the steps beyond the restaurant tables.</p>"
    },
    {
      coords: { lat: 37.79052000000007, lng: -122.39655999999997 },
      content:
        "<h2>Millennium Tower Plaza @ 301 Mission St</h2><h3>Atrium, Plaza</h3><p>(M-F: 8am – 6pm)</p><p>This atrium features extensive artwork and is served by a restaurant & bar on the premises. It has various types of seating with tables and high overhead windows.</p>"
    },
    {
      coords: { lat: 37.79098054100007, lng: -122.40045256699995 },
      content:
        "<h2>1 Bush St</h2><h3>Urban Garden</h3><p>(M-F: 8am – 6pm)</p><p>This Urban Garden provides a sunken space with a water fountain. Space is accessed by stairs from Bush Street and curved walkways from Market street.</p>"
    },
    {
      coords: { lat: 37.789000000000044, lng: -122.40028299999994 },
      content:
        "<h2>55 Second St - A</h2><h3>Indoor Park</h3><p>(M-F: 8am – 6pm)</p><p>This large indoor park located inside the Historia building features a wooden floor, tables and chairs, and large leather chairs on a carpeted section near the large window looking out on Stevenson Street.</p>"
    },
    {
      coords: { lat: 37.79347000000007, lng: -122.39889 },
      content:
        "<h2>200 California St</h2><h3>Pedestrian Walkway</h3><p>(Open at all times)</p><p>Pedestrian seating area on a widened sidewalk with public sculpture. Pedestrians may sit on linear seating that forms a planter box.</p>"
    },
    {
      coords: { lat: 37.791229851000026, lng: -122.39121178499994 },
      content:
        "<h2>Gap Building @ 2 Folsom St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Large plaza with seating areas, art sculptures and diverse landscaping.</p>"
    },
    {
      coords: { lat: 37.791000000000054, lng: -122.39668499999999 },
      content:
        "<h2>350 Mission St</h2><h3>Interior Plaza</h3>(M-F: 8am - 5pm)</p><p>An enclosed open space, with operable sliding glass doors that open up to street frontage; located within the street-level lobby.</p>"
    },
    {
      coords: { lat: 37.792860000000076, lng: -122.40004999999996 },
      content:
        "<h2>345 California St - East B</h2><h3>Snippet</h3><p>(Open at all times)</p><p>Snippets on the west and east sides of building connected by an interior walkway. The west snippet can be entered from Sansome Street, next to the Mandarin Hotel. Bench and bamboo planters. The east snippet is on the B side.</p>"
    },
    {
      coords: { lat: 37.786110000000065, lng: -122.39668999999998 },
      content:
        "<h2>Marriot Courtyard - C @ 299 2nd St</h2><h3>Interior Courtyard</h3><p>(M-F: 8am – 6pm)</p><p>Extensive landscaping detail with several art attractions. Comfortable seating arrangements located throughout. Food service inside the hotel.</p>"
    },
    {
      coords: { lat: 37.78927548300004, lng: -122.40282139799996 },
      content:
        "<h2>Crocker Galleria @ 165 Sutter St</h2><h3>Sun Terrace</h3><p>(M-F: 8am – 6pm)</p><p>Landscaping, benches, and great rooftop architecture views of adjacent buildings.</p>"
    },
    {
      coords: { lat: 37.78993000000003, lng: -122.39937999999995 },
      content:
        "<h2>49 Stevenson St</h2><h3>Pedestrian Walkway</h3><p>(Open at all times)</p><p>Walkway in front of building on Stevenson Street with small fountains and art sculpture.</p>"
    },
    {
      coords: { lat: 37.78862256000008, lng: -122.40264634599998 },
      content:
        "<h2>1 Post St</h2><h3>Snippet</h3><p>(Open at all times)</p><p>Space with concrete steps surrounding the hexagonal fence of Montgomery Bart Station sunken plaza.</p>"
    },
    {
      coords: { lat: 37.79111153000008, lng: -122.39851020699996 },
      content:
        "<h2>425 Market St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Open plaza between buildings with benches, trees, and some landscape.</p>"
    },
    {
      coords: { lat: 37.79361000000006, lng: -122.39863999999994 },
      content:
        "<h2>150 California St</h2><h3>Sun Terrace</h3><p>(M-F: 9am - 6pm)</p><p>View Terrace located on 6th level. Contains a large sculpture, long periods of sunlight, and several types of seating. Extensive views of the surrounding area.</p>"
    },
    {
      coords: { lat: 37.791546846000074, lng: -122.39337111499998 },
      content:
        "<h2>Spear Street Plaza @ 160 Spear St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Outdoor alleyway with seating and tables and a large sculpture.</p>"
    },
    {
      coords: { lat: 37.79263000000003, lng: -122.40090999999995 },
      content:
        "<h2>345 California St - West C</h2><h3>Snippet</h3><p>(Open at all times)</p><p>Two snippets on east and west side of building connected by an interior walkway.</p>"
    },
    {
      coords: { lat: 37.791428186000076, lng: -122.39411195499997 },
      content:
        "<h2>135 Main St</h2><h3>Indoor Park</h3><p>(M-F: 8am - 6pm)</p><p>Located in lobby at building's main entrance. Seating provided.</p>"
    },
    {
      coords: { lat: 37.789000000000044, lng: -122.40028299999994 },
      content:
        "<h2>55 2nd St - C</h2><h3>Atrium</h3><p>(M-F: 8am - 6pm)</p><p>Entrance from Stevenson Street.</p>"
    },
    {
      coords: { lat: 37.792770000000075, lng: -122.40486999999996 },
      content:
        "<h2>600 California St</h2><h3>Snippet</h3><p>(Open at all times)</p><p>Shady open space with art sculptures on the northwest side of the building and up the stairs. Joins with the open space of the adjacent building.</p>"
    },
    {
      coords: { lat: 37.793060000000025, lng: -122.40045999999995 },
      content:
        "<h2>345 California St - A</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Plaza in front of main building entrance. The plaza and an east and west snippet are joined by a walkway. Plaza and east snippet are served by the restaurant.</p>"
    },
    {
      coords: { lat: 37.79305036900007, lng: -122.40520017199998 },
      content:
        "<h2>650 California St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Open space is elevated with the street's slope and surrounds the building offering seating on ledges and planter boxes. Large art piece at the entrance on California Street.</p>"
    },
    {
      coords: { lat: 37.79094499100006, lng: -122.39162754499995 },
      content:
        "<h2>201 Spear St</h2><h3>Urban Garden</h3><p>(Open at all times)</p><p>Plaza with seating along planters.</p>"
    },
    {
      coords: { lat: 37.792739211000026, lng: -122.39915922499995 },
      content:
        "<h2>100 Pine St</h2><h3>Urban Garden</h3><p>(M-F: 8am - 5pm)</p><p>Accessed through front entrance of the building or a narrow walkway on Front Street. Space has water fountains, seating, landscaping, and art.</p>"
    },
    {
      coords: { lat: 37.79167436300003, lng: -122.39868154399994 },
      content:
        "<h2>444 Market St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Plaza with no seating.</p>"
    },
    {
      coords: { lat: 37.790397203000055, lng: -122.39288583399997 },
      content:
        "<h2>211 Main St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Open Plaza with two benches and gated children's play area to Spear Street.</p>"
    },
    {
      coords: { lat: 37.78803000000005, lng: -122.39952999999997 },
      content:
        "<h2>101 2nd St</h2><h3>Greenhouse</h3><p>(M-F: 8am - 6pm)</p><p>Ground level at 2nd and Mission Street. Features large trees, windows, and art. Two levels of space served by a café.</p>"
    },
    {
      coords: { lat: 37.788400000000024, lng: -122.39890999999994 },
      content:
        "<h2>555 Mission St</h2><h3>Plaza</h3><p>(Open at all times)</p><p>Large plaza located in front of 555 Mission Street and runs along the west side of building. Several distinct sitting areas and several art and landscaping features.</p>"
    },
    {
      coords: { lat: 37.78880000000004, lng: -122.39599999999996 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.784730000000025, lng: -122.40651999999994 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.79175428900004, lng: -122.39779066599999 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.788920000000076, lng: -122.39907999999997 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.793639979000034, lng: -122.40279735099995 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.78197000000006, lng: -122.40467999999998 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.79173693300004, lng: -122.39622553899994 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.79073350800007, lng: -122.39221924599997 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.79096221800006, lng: -122.39516089299997 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.789612211000076, lng: -122.39879603999998 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.78854000000007, lng: -122.39630999999997 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.79300000000006, lng: -122.39371999999997 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.78618000000006, lng: -122.39720999999997 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.792080000000055, lng: -122.39258999999998 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.78968511700003, lng: -122.39426674299995 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.795052361000046, lng: -122.40216797899996 },
      content: "<h2></h2>"
    },
    {
      coords: { lat: 37.789151392000065, lng: -122.39868143099994 },
      content: "<h2></h2>"
    }
  ];

  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // add marker function
  function addMarker(props) {
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      content: props.content
    });
  }
}

//   // info window
//   const infoWindow = new google.maps.InfoWindow({
//     content: "<h1>PoPo Site</h1>"
//   });
//   marker.addListener("click", () => {
//     infoWindow.open(map, marker);
//   });
// }
