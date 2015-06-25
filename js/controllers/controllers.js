// js/controllers.js
'use strict';

var todoAppControllers = angular.module('todoAppControllers', []);

todoAppControllers.controller('TodoCtrl', ['$scope', '$log', 'todosStorage',
	function ($scope, $log, todosStorage) {   
    	
        $scope.todos = todosStorage.getTodos();
    
        $log.debug("get all " + $scope.todos);
        
        $scope.addTodo = function() {
            
            var newTodo = $scope.newTodo.trim();
            
            if (!newTodo.length) {
                // éviter les todos vides
                return;
            }
            
            $scope.todos.push({
                // on ajoute le todo au tableau des todos
                title: newTodo,
                completed: false
            });  
            
            $log.debug("todoAppControllers::addTodo " + newTodo);
            
            todosStorage.addTodos($scope.todos); 
            
             $scope.newTodo = '';
        }
        
        // Enlever un todo
        $scope.removeTodo = function (todo) {
            todos.splice(todos.indexOf(todo), 1);
        };
        
         // Cocher / Décocher tous les todos
        $scope.markAll = function (completed) {
            todos.forEach(function (todo) {
                todo.completed = !completed;
            });
        };
        
         // Enlever tous les todos cochés
        $scope.clearCompletedTodos = function () {            
            $scope.todos =  $scope.todos.filter(function (todo) {            
                return !todo.completed;
            });
            
             todosStorage.saveTodos($scope.todos); 
        };
        
        $scope.removeAll = function (todo) {
        
            if (confirm('Etes-vous sûr(e) de vouloir tout supprimer !!??') ) {
                todosStorage.removeAll(); 
                $scope.todos = todosStorage.getTodos();             
            }
        }
     
    }
    
]);

