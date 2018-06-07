/// <reference path="angular.min.js" />

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var technologies = [
                { name: "c#"},
                { name: "Java"},
                { name: "Python"},
                { name: "C++"}
            ];

            $scope.technologies = technologies;
            $scope.sortColumn = "name";
        });