/**
 * Factory: OfficerFactory
 */
angular.module('GalacticApp')
  .factory('OfficerFactory', function ShipFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.officer = [];

    exports.goToShip = function(fleetId, shipId) {
      if ( angular.isNumber(fleetId) && angular.isNumber(shipId) ) {
        $location.path('command/fleet/' + fleetId + '/ship/' + shipId)
      }
    };

    exports.goToCommand = function() {
      $location.path('command/')
    };

    exports.goToFleet = function(fleetId) {
      if ( angular.isNumber(fleetId) ) {
        $location.path('command/fleet/' + fleetId)
      }
    };

    exports.goToCommand = function() {
      $location.path('command/')
    };

    exports.getOfficer = function (params) {
      if (params.officerId) {
        var deferred = $q.defer();
        return $http.get('assets/json/officers.json')
          .success(function (data) {
            exports.officer = getOfficer(data, params.officerId);
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    function getOfficer (data, officerId) {
      var officer = [];
      for (var index in data) {
        var ship = data[index];
        if (ship.officerId == officerId) {
          officer.push(data[index]);
        }
      }
      return officer;
    }

    return exports;
  });