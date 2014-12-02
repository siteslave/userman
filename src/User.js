(function (window, angular) {

    'use strict';

    angular.module('app.User', [
        'ngRoute',
        'app.MainController',
        'app.EditController',
        'app.RegisterController'
    ])
        .config(function ($routeProvider) {

            $routeProvider
                .when('/', {
                    templateUrl: './partials/Main.html',
                    controller: 'MainController'
                })
                .when('/register', {
                    templateUrl: './partials/Register.html',
                    controller: 'RegisterController'
                })
                .when('/edit/:id', {
                    templateUrl: './partials/Edit.html',
                    controller: 'EditController'
                })
                .otherwise({ redirectTo: '/' });

        });

})(window, window.angular);