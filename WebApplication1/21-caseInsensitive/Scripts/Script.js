/// <reference path="angular.min.js" />



var app = angular.module("myModule", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/london", {
                    templateUrl: "Templates/London.html",
                    controller: "londonController",
                    controllerAs: "londonCtrl",
                    caseInsensitiveMatch: true
                })
                .when("/paris", {
                    templateUrl: "Templates/Paris.html",
                    controller: "parisController",
                    controllerAs: "parisCtrl",
                    caseInsensitiveMatch: true
                })
                .when("/tokyo", {
                    templateUrl: "Templates/Tokyo.html",
                    controller: "tokyoController",
                    controllerAs: "tokyoCtrl",
                    caseInsensitiveMatch: true
                })

        })
        .controller("londonCtrl", function(){
            //add in whatever controller specific code here
        })
        .controller("parisCtrl", function () {
            //add in whatever controller specific code here
        })
        .controller("tokyoCtrl", function () {
            //this.message = "something";
            //add in whatever controller specific code here
        });