/// <reference path="angular.min.js" />

var myModule = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {
            var employee = {
                firstName: "John",
                surname: "Serpico",
                gender: "Male"
            };

            $scope.employee = employee;

        });
