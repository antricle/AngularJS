/// <reference path="angular.min.js" />



var app = angular.module("myModule", ["ngRoute"]);
        app.config(function ($routeProvider) {
            $routeProvider
                .when("/london", {
                    templateUrl: "Templates/London.html",
                    controller: "londonController as londonCtrl"
                })
                .when("/paris", {
                    templateUrl: "Templates/Paris.html",
                    controller: "parisController as parisCtrl"
                })
                .when("/tokyo", {
                    templateUrl: "Templates/Tokyo.html",
                    controller: "tokyoController as tokyoCtrl"
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