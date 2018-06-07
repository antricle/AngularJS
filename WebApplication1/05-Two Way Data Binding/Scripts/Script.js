/// <reference path="angular.min.js" />


var myModule = angular
            .module("twoWayDataBindingModule", [])
            .controller("twoWayDataBindingController", function ($scope) {
                var employee = {
                    firstName: "John",
                    lastName: "Edwards",
                    gender: "female"
                };

                $scope.employee = employee;

            });