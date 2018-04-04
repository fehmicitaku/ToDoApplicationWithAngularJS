//MODULE
var todoApp = angular.module('todoApp', ['ngRoute']);

//ROUTES
todoApp.config(function($routeProvider) {
  $routeProvider
    .when('/todo', {
      templateUrl: '/views/todo.html',
      controller: 'mainController'
    })
    .when('/dashboard', {
      templateUrl: '/views/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/edit', {
      templateUrl: '/views/edit.html',
      controller: 'editController'
    }).otherwise({
      redirectTo: '/dashboard'
    });
});

//CONTROLLERS
todoApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

  $scope.title = "Simply To-Do App";
  $scope.buttonText = "Add Item";
  $scope.todotext = "";
  $scope.deleteButtonTxt = "Delete Item";
  $scope.editButtonTxt = "Edit Item";
  $scope.todoList = ["Go to work!", "Take coffee", "Meet my friend"];
  $scope.itemCount = $scope.todoList.length;

  $scope.removeItem = function($index) {
    this.todoList.splice($index, 1);
    $scope.itemCount = this.todoList.length;
  }

  $scope.addItem = function() {
    this.todoList.push(this.todotext);
    this.todotext = '';
    this.itemCount = this.todoList.length;
  }

}]);

todoApp.controller('dashboardController', ['$scope', function($scope) {

  $scope.title = "Information about this Application!"
  $scope.description = "This To-Do App was invented to test my AngularJS skills";
  $scope.dummy = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

}]);

todoApp.controller('editController', ['$scope', function($scope) {

  $scope.title = "Edit Section under developing...";
}]);