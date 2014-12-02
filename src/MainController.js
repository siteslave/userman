(function (window, angular) {
    'use strict';

    var _ = require('lodash');

    angular.module('app.MainController', ['app.MainService'])
        .controller('MainController', function ($scope, MainService) {
            $scope.users = [];

            // get users list
            MainService.getUsers()
                .then(function (rows) {
                    $scope.users = rows;
                }, function (err) {
                    console.log(err);
                    alert('Error');
                });

            $scope.doRemove = function (id) {
                if (confirm('Are you sure?')) {
                    MainService.removeUser(id)
                        .then(function () {
                            _.remove($scope.users, {id: id});
                        }, function (err) {
                            alert('Error');
                            console.log(err);
                        });
                }

            };

        });

})(window, window.angular);