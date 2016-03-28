'use strict';

angular.module('myApp.home', ['ngRoute', 'firebase'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var categoryRefs = new Firebase("https://boiling-fire-2809.firebaseio.com/categories");
    var recipeRefs = new Firebase("https://boiling-fire-2809.firebaseio.com/recipes");
    $scope.callFormPanel = true;
    $scope.formPanel = true;
    $scope.categories = $firebaseArray(categoryRefs);
    $scope.recipes = $firebaseArray(recipeRefs);

    $scope.cancelRecipe = function() {
        //Reinitialize all data
        $scope.callFormPanel = true;
        $scope.formPanel = true;
    }

    $scope.showForm = function() {
        $scope.formPanel = !$scope.formPanel
        $scope.callFormPanel = !$scope.callFormPanel
    }

    $scope.addCategory = function() {
        $scope.categories.$add({
          value: $scope.newCategory
        });
        $scope.recipeCategory = "";
        $scope.newCategory = "";
    }

    $scope.addRecipe = function() {
        $scope.recipes.$add({
          recipeCategory: $scope.recipeCategory,
          recipeId: $scope.recipes.length,
          recipeInfo: $scope.recipeInfo,
          recipeName: $scope.recipeName
        });
        $scope.recipeCategory = "";
        $scope.recipeInfo = "";
        $scope.recipeName = "";
        $scope.formPanel = !$scope.formPanel
        $scope.callFormPanel = !$scope.callFormPanel
    }
}]);
