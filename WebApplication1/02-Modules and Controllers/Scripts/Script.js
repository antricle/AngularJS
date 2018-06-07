/// <reference path="angular.min.js" />

//Create a module
var myApp = angular.module("myModule", []);

//Create the controller 
var myController = function ($scope) {
    $scope.message = "AngularJS Tutorial";
}

// register the controller with the module 
myApp.controller("myController", myController);

//OR do it like this 
//var myApp = angular.module("myModule", []);

//myApp.config("myController", function ($scope) {
//    $scope.message = "AngularJS tutorial";
//});

