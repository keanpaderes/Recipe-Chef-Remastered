'use strict';

angular.module('myApp.home', ['ngRoute'])

// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', ['$scope', function($scope) {
    //References for Firebase db
    var config = {
        apiKey: "AIzaSyAXV5cglKo1ih8bsaxySNEjQZrvLHBe6EE",
        authDomain: "boiling-fire-2809.firebaseapp.com",
        databaseURL: "https://boiling-fire-2809.firebaseio.com",
        storageBucket: "boiling-fire-2809.appspot.com",
    };
    firebase.initializeApp(config);
    firebase.database();

    var recipeRefs = firebase.database().ref('recipes/');
    var categoryRefs = firebase.database().ref('categories/');

    recipeRefs.on('value', function(snapshot){
        console.log(snapshot.val());
    });

    // //Initialization of the hide/show html elements
    // $scope.callFormPanel = true;
    // $scope.formPanel = true;
    //
    // //Form checkers
    // $scope.isAddCatError = false;
    // $scope.hasName = false;
    // $scope.hasCat = false;
    // $scope.hasInfo = false;
    //
    // //Array of data from db.
    // // $scope.categories = firebase.database().ref('categories/');
    // // $scope.recipes = firebase.database().ref('recipes/');
    //
    //
    // $scope.cancelRecipe = function() {
    //     //Reinitialize all data
    //     $scope.callFormPanel = true;
    //     $scope.formPanel = true;
    // }
    //
    // $scope.showForm = function() {
    //     //Shows form panel
    //     $scope.formPanel = !$scope.formPanel
    //     $scope.callFormPanel = !$scope.callFormPanel
    // }
    //
    // $scope.addCategory = function() {
    //   //Adds into the categories
    //   if($scope.newCategory == null){
    //     //Catcher if category field is empty.
    //     $scope.isAddCatError = true;
    //   }else{
    //     $scope.categories.$add({
    //       value: $scope.newCategory
    //     });
    //     $scope.recipeCategory = "";
    //     $scope.newCategory = "";
    //     $scope.isAddCatError = false;
    //   }
    // }
    //
    // $scope.addRecipe = function() {
    //   //Adds a recipe into the firebase array.
    //   var isFormNotValid = $scope.recipeCategory == null || $scope.recipeName == null || $scope.recipeInfo == null; //Boolean expression for checking if forms are empty.
    //   if(isFormNotValid){
    //     //If forms are empty, shows error in forms.
    //     $scope.hasName = true;
    //     $scope.hasCat = true;
    //     $scope.hasInfo = true;
    //   }else{
    //     $scope.recipes.$add({
    //       //Adds into the firebase array.
    //       recipeCategory: $scope.recipeCategory,
    //       recipeId: $scope.recipes.length,
    //       recipeInfo: $scope.recipeInfo,
    //       recipeName: $scope.recipeName
    //     });
    //     //Reinitializes the forms into empty and hides the forms.
    //     $scope.recipeCategory = "";
    //     $scope.recipeInfo = "";
    //     $scope.recipeName = "";
    //     $scope.formPanel = !$scope.formPanel
    //     $scope.callFormPanel = !$scope.callFormPanel
    //   }
    // }
    //
    // $scope.removeRecipe = function(recipe) {
    //   //Removes a recipe by removing it from the firebase array.
    //   $scope.recipes.$remove(recipe);
    // }
}]);
