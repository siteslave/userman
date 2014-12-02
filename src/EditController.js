(function (window, angular) {
    'use strict';

    angular.module('app.EditController', ['app.EditService'])
        .controller('EditController', function ($scope, $routeParams, EditService) {
            // get info
            $scope.fullname = null;

            var id = $routeParams.id;
            EditService.getDetail(id)
                .then(function (row) {
                    $scope.fullname = row.fullname;
                }, function (err) {
                    console.log(err);
                    alert("Error");
                });

            $scope.saveUpdate = function () {
              EditService.saveUpdate(id, $scope.fullname)
                  .then(function () {
                      location.href = 'index.html#/';
                  }, function (err) {
                      console.log(err);
                      alert("Error");
                  });
            };
        });

})(window, window.angular);