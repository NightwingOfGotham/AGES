var componentsPath = 'app/components/';

angular.module('GalacticApp', [
  'ngRoute',
  'ngSanitize'
]).config(function ( $routeProvider ) {
  
  'use strict';

  $routeProvider
    .when('/command', {
      templateUrl: componentsPath + 'command/command.html',
      controller: 'CommandCtrl',
      controllerAs: 'command'
    })
    .when('/command/fleet/:fleetId', {
      templateUrl: componentsPath + 'fleet/fleet.html',
      controller: 'FleetCtrl',
      controllerAs: 'fleet'
    })
    .when('/command/fleet/:fleetId/ship/:shipId', {
      templateUrl: componentsPath + 'ship/ship.html',
      controller: 'ShipCtrl',
      controllerAs: 'ship'
    })
    .when('/command/fleet/:fleetId/ship/:shipId/officer/:officerId', {
      templateUrl: componentsPath + 'officer/officer.html',
      controller: 'OfficerCtrl',
      controllerAs: 'officer'
    })
    .otherwise({
      redirectTo: '/command'
    });
}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});