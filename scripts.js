mapboxgl.accessToken =
  "pk.eyJ1IjoiZmUtdGhvbWUiLCJhIjoiY2tnOGRndm5sMGRiZjJ0bzgxZWdmbWY0NiJ9.e-fbkHP5b2NrBZ8QTFnYjw"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-46, 26])
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
    profile: 'mapbox/driving-traffic',
    alternatives: false,
    congestion: true,
    placeholderOrigin: "Digite o endereço de partida",
    placeholderDestination: "Digite o destino.",
    controls: {instructions: false, profileSwitcher: false  }
    
  })

  map.addControl(directions, "top-left")

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav, "bottom-right")
  
  directions.on("route", rota => {
    let routes = rota.route
    const priceSimulation = routes.map(rota => rota.distance / 1000 * 1.58)
    document.getElementById("result").innerHTML = `R$ ${Math.abs(priceSimulation).toFixed(2)}`;
  })
}

