/// <reference path="angular.min.js" />

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope, $http) {

            $http.get("http://localhost:51864/api/employee/3") //replace this with a service address
            .then(function (response) {
                $scope.data = response.data;
            });
        });