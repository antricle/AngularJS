/// <reference path="angular.min.js" />

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var technologies = [
                { name: "c#", likes: 0, dislikes: 0 },
                { name: "Java", likes: 0, dislikes: 0 },
                { name: "Python", likes: 0, dislikes: 0 },
                { name: "C++", likes: 0, dislikes: 0 }
            ];

            $scope.technologies = technologies;

            $scope.incrementLikes = function (tec) {
                tec.likes++;
            };

            $scope.incrementDislikes = function (tec) {
                tec.dislikes++;
            };
        });