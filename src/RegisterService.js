(function (window, angular) {
    'use strict';

    var knex = require('knex')({
        client: 'mysql',
        connection: {
            host: 'localhost',
            port: 3306,
            database: 'test',
            user: 'root',
            password: ''
        }
    });

    angular.module('app.RegisterService', [])
        .factory('RegisterService', function ($q) {

            var q = $q.defer();

            return {
              saveRegister: function (data) {
                  knex('users')
                      .insert(data)
                      .exec(function (err) {
                          if (err) q.reject(err);
                          else q.resolve();
                      });

                  return q.promise;
              }
            };
        });

})(window, window.angular);