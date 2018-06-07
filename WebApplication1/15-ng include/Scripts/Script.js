/// <reference path="angular.min.js" />

var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {

            var employees = [
                { name: "Shiv", gender: 1, salary: 25000 },
                { name: "Alex Costa", gender: 1, salary: 100000 },
                { name: "Jane", gender: 2, salary: 10000 }
            ];

            $scope.employees = employees;
            $scope.employeeView = "EmployeeTable.html";


        });