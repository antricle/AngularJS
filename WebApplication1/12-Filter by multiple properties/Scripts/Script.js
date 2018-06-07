/// <reference path="angular.min.js" />

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var technologies = [
                { name: "c#", creator:"Microsoft"},
                { name: "Java", creator: "Sun"},
                { name: "Python", creator: "NA"},
                { name: "C++", creator: "BS"}
            ];

            $scope.technologies = technologies;

            $scope.search = function (item) {
                if ($scope.searchText == undefined) {
                    return true
                } else {
                    if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                        item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                        return true;
                    }
                }
                return false;
            };
        });