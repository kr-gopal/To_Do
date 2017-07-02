'use strict';

angular.module('to_do')
.constant("baseURL", "http://localhost:3000/")
.factory('taskFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "/api/tasks", null, {
            'update': {
                method: 'GET'
            }
        });

}])
.factory('createTaskFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "/api/tasks", null, {
            'update': {
                method: 'POST'
            }
        });

}])
.factory('deleteTaskFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "/api/tasks/:", null, {
            'update': {
                method: 'DELETE'
            }
        });

}])