mapboxgl.accessToken = 'pk.eyJ1IjoiZmUtdGhvbWUiLCJhIjoiY2tnOGRndm5sMGRiZjJ0bzgxZWdmbWY0NiJ9.e-fbkHP5b2NrBZ8QTFnYjw';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-46.6404421, -23.5865325], // starting position
    zoom: 10 // starting zoom
    });
     
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());
