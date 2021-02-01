mapboxgl.accessToken =
  "pk.eyJ1IjoiZmUtdGhvbWUiLCJhIjoiY2tnOGRndm5sMGRiZjJ0bzgxZWdmbWY0NiJ9.e-fbkHP5b2NrBZ8QTFnYjw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 13
  })

  

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    language: 'pt-br',
    alternatives: true,
    profile: 'mapbox/driving',
    placeholderOrigin: "Digite o endereço de partida",
    placeholderDestination: "Digite o destino."
  })

  map.addControl(directions, "top-left")

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav, "bottom-right")
}
