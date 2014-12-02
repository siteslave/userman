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

    angular.module('app.MainService', [])
        .factory('MainService', function ($q) {

            return {

                getUsers: function () {
                    var q = $q.defer();

                    knex('users')
                        .select('*')
                        .orderBy('fullname', 'desc')
                        .exec(function (err, rows) {
                            if (err) q.reject(err);
                            else q.resolve(rows);
                        });
                    return q.promise;
                },

                removeUser: function (id) {
                    var q = $q.defer();

                    knex('users')
                        .where('id', id)
                        .delete()
                        .exec(function (err) {
                            if (err) q.reject(err);
                            else q.resolve();
                        });

                    return q.promise;
                }

            };

        });

})(window, window.angular);