angular.module('ToDo', [])
 .controller('todoController', function($scope) {
   $scope.todos = [
    { 'title':'Get something on the screen', 'done': false }
   ];
   $scope.addItem = function(){
    $scope.todos.push({'title':$scope.newItem, 'done': false });
    $scope.newItem = '';
   }
   $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item) {
      return !item.done
    })
   };
   $scope.itemComplete = function(){
    console.log($scope.todos);

   }
});