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
      if($scope.newCategory.length == 0){
        $scope.isAddCatError = true;
      }else{
        $scope.categories.$add({
          value: $scope.newCategory
        });
        $scope.recipeCategory = "";
        $scope.newCategory = "";
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
    }

    $scope.removeRecipe = function(recipe) {
      $scope.recipes.$remove(recipe);
      //$scope.categories.$remove(recipe);
    }
}]);
