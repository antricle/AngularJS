/// <reference path="angular.min.js" />

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var technologies = [
                { name: "c#", creator: "Microsoft"},
                { name: "Java", creator: "Sun" },
                { name: "Python", creator: "Unknown"},
                { name: "C++", creator: "BS"}
            ];

            $scope.technologies = technologies;
            $scope.sortColumn = "name";
            $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
            };


   
        });