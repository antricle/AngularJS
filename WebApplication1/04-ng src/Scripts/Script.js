/// <reference path="angular.min.js" />


var myModule = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {
            var character = {
                name: "Homer",
                image: "Images/Homer_Simpson.png"
            };

            $scope.character = character;
        });