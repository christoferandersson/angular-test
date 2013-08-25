function TodoCtrl($scope) {
	$scope.todos = [
		{
			text: 		'Test', 
			done: 		false,
			updated_at: Date.now()
		}
	];
	
	$scope.addTodo = function() {
		$scope.todos.push(
			{
				text: $scope.todoText, 
				done: false, 
				updated_at: Date.now()
			}
		);
		$scope.todoText = '';
	};
}