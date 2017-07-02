'use strict';

angular.module('to_do')
.controller('HomeController', ['$scope','http', function ($scope, $http) {
    $scope.task = {};
    $scope.showTask= false;
    $scope.message = "Loading ...";

    taskFactory.query(
        function (response) {
            $scope.Tasks = data;
            console.log(data);
            $scope.showTask= true;

        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });

    createTaskFactory.query(
        function (response) {
            $scope.Task = {}; 
                $scope.Task = data;
                console.log(data);
                $scope.showTask= true;

        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });
        $scope.deleteTask = function(id) {
            deleteTaskFactory.query(
            function (response) {
                $scope.Task = data;
                console.log(data);
                $scope.showTask= true;

        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });
        }
    
}])
;