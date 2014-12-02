(function (window, angular) {
    'use strict';

    var md5 = require('MD5');

    angular.module('app.RegisterController', ['app.RegisterService'])
        .controller('RegisterController', function ($scope, RegisterService) {

            $scope.saveRegister = function () {
                var data = {
                    username: $scope.username,
                    password: md5($scope.password),
                    fullname: $scope.fullname
                };

                // save data
                RegisterService.saveRegister(data)
                    .then(function () {
                        alert('Success');
                        location.href = 'index.html';
                    }, function (err) {
                        alert(err);
                        console.log(err);
                    });
            };
        });

})(window, window.angular);