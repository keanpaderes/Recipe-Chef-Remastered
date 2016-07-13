'use strict';

// Declare app level module which depends on views, and components
//ngRoute allows routing
angular.module('myApp', [
  'ngRoute',
  'myApp.home'
]).
config(['$routeProvider', function($routeProvider) {
  //Routes are added here
  $routeProvider.otherwise({
        redirectTo: '/home'
  });
}]);
