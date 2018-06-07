/// <reference path="angular.min.js" />


var myModule = angular
            .module("myModule", [])
            .controller("myController", function ($scope) {
                var countries = [
                    {
                        name: "UK",
                        cities: [
                            { name: "London" },
                            { name: "Birmingham" },
                            { name: "Manchester" }
                        ]
                    },
                    {
                        name: "USA",
                        cities: [
                            { name: "LA" },
                            { name: "SF" },
                            { name: "NYC" }
                        ]
                    },
                    {
                        name: "India",
                        cities: [
                            { name: "Delhi" },
                            { name: "Punjab" },
                            { name: "Gujurat" }
                        ]
                    }
                ];

                $scope.countries = countries;
            });