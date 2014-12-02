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

    angular.module('app.EditService', [])
        .factory('EditService', function ($q) {

            return {

                getDetail: function (id) {
                    var q = $q.defer();

                    knex('users')
                        .where('id', id)
                        .exec(function (err, rows) {
                           if (err) q.reject(err);
                            else q.resolve(rows[0]);
                        });

                    return q.promise;
                },

                saveUpdate: function (id, fullname) {
                    var q = $q.defer();

                    knex('users')
                        .where('id', id)
                        .update({
                            fullname: fullname
                        })
                        .exec(function (err) {
                            if (err) q.reject(err);
                            else q.resolve();
                        });

                    return q.promise;
                }

            };
        });

})(window, window.angular);