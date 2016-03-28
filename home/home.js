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
<<<<<<< HEAD
.controller('HomeCtrl', ['$scope', '$firebaseArray', '$firebaseObject', function($scope, $firebaseArray, $firebaseObject) {
    //References for Firebase db
    var categoryRefs = new Firebase("https://boiling-fire-2809.firebaseio.com/categories");
    var recipeRefs = new Firebase("https://boiling-fire-2809.firebaseio.com/recipes");

    //Initialization of the hide/show html elements
    $scope.callFormPanel = true;
    $scope.formPanel = true;

    //Form checkers
    $scope.isAddCatError = false;
    $scope.hasName = false;
    $scope.hasCat = false;
    $scope.hasInfo = false;

    //Array of data from db.
=======
.controller('HomeCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
    var categoryRefs = new Firebase("https://boiling-fire-2809.firebaseio.com/categories");
    var recipeRefs = new Firebase("https://boiling-fire-2809.firebaseio.com/recipes");
    $scope.callFormPanel = true;
    $scope.formPanel = true;
>>>>>>> 359c41459577baf557748a00ffaf63c2156e5a8f
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
<<<<<<< HEAD
      if($scope.newCategory.length == 0){
        $scope.isAddCatError = true;
      }else{
=======
>>>>>>> 359c41459577baf557748a00ffaf63c2156e5a8f
        $scope.categories.$add({
          value: $scope.newCategory
        });
        $scope.recipeCategory = "";
        $scope.newCategory = "";
<<<<<<< HEAD
        $scope.isAddCatError = false;
      }
    }

    $scope.addRecipe = function() {
      var isFormNotValid = $scope.recipeCategory == null || $scope.recipeInfo == null || $scope.recipeInfo == null;
      if(isFormNotValid){
        $scope.hasName = true;
        $scope.hasCat = true;
        $scope.hasInfo = true;
      }else{
=======
    }

    $scope.addRecipe = function() {
>>>>>>> 359c41459577baf557748a00ffaf63c2156e5a8f
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
<<<<<<< HEAD
      }
    }

    $scope.removeRecipe = function(recipe) {
      $scope.recipes.$remove(recipe);
      //$scope.categories.$remove(recipe);
=======
>>>>>>> 359c41459577baf557748a00ffaf63c2156e5a8f
    }
}]);
