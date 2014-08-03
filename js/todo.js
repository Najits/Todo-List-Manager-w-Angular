angular.module('todoApp', [])
	.controller('TodoCtrl', ['$scope', function($scope){

	    $scope.todos = [
	    	{text: "Learn AngularJS", done: false},
	    	{text: "Build an app", done: false}
	    ];

	    $scope.addTodo = function () {
	    	$scope.todos.push({text:$scope.formTodoText, done:false});
	    	formTodoText = '';
	    };

	    $scope.remaining = function () {
	    	var count = 0;
	    	angular.forEach($scope.todos, function(todo) {
	    		if(!todo.done) count++;
	    	});
	    	return count;
	    };

	    $scope.clearCompleted = function () {
	    	var oldTodos = $scope.todos;
	    	$scope.todos = [];
	    	angular.forEach(oldTodos, function(todo) {
	    		if(!todo.done) $scope.todos.push(todo);
	    	});
	    };
	}]);