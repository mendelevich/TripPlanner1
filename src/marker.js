const mapboxgl = require('mapbox-gl');
// const markersArr = [
//   { url: 'url(http://i.imgur.com/WbMOfMl.png)', coor: [-74.009, 40.705] },
//   //   { url: 'url(http://i.imgur.com/WbMOfMl.png)', coor: [-87.6354, 41.8885] },
// ];

function createElement() {
  console.log('I am being run!');
  const markerDomEl = document.createElement('div');
  markerDomEl.style.width = '32px';
  markerDomEl.style.height = '39px';
  markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
  return new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]);
}

// function createAll() {
//   const arr = markersArr.map(element =>
//     createElement(element.url, element.coor)
//   );

//   console.log(arr);

//   return arr;
// }

module.exports = createElement;
