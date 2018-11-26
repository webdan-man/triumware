"use strict";

function init_map() {
  var bounds = new google.maps.LatLngBounds();
  var center = new google.maps.LatLng(50.7471603, 25.3263281);
  bounds.extend(center);
  var loc = new google.maps.LatLng(50.7471603, 25.3263281);
  bounds.extend(loc);
  var mapOptions = {
    zoom: 14,
    center: center,
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#444444"
      }]
    }, {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [{
        "color": "#f2f2f2"
      }]
    }, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{
        "saturation": -100
      }, {
        "lightness": 45
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{
        "visibility": "simplified"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{
        "color": "#ff9922"
      }, {
        "visibility": "on"
      }]
    }]
  };
  var mapElement = document.querySelector('.map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var marker = new google.maps.Marker({
    position: loc,
    map: map,
    title: 'TRIUMWARE'
  });
}

init_map();