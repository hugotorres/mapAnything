angular.module('starter').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
      name : "Bogotá D.C., Colombia",
      description:"Capital city of Colombia",
      category:"City",
      lat : 4.624335,
      lng : -74.063644
    },
  //TODO
  //falta implementar la funcionalidad para guardar en localstorage y luego cuando detecte conexion a internet subirlo a firebase o parse.
  //

  ];

  return locationsObj;

}]);