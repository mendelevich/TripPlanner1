const mapboxgl = require('mapbox-gl');

function createElement() {
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);
}
module.exports = createElement;
