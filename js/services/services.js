/*app.service('someService', [function () {
    this.name = 'Bob';
}]);
*/
var appServices = angular.module('todoAppServices', ['ngResource']);

appServices.factory('todosStorage', [ "localStorageService", "$log", function(localStorageService,log) {

    return {
    
        initialize : function() {
            var todos =  [];
            return todos;
        },
        
        getTodos: function() {
        	var todos = localStorageService.get('todos');
            
        	if(todos == null) {
        		todos = this.initialize();
        	}
            
           // console.log('todosStorage::getTodos : ' +todos);
            log.debug('todosStorage::getTodos : ' +todos);
              
            return todos;
        },
        
        addTodos : function(todos) {        
            log.debug('todosStorage::addTodos : localStorageService::set : ' +todos);
            //console.log('todosStorage::addTodos : localStorageService::set : ' +todos);
            
			this.saveTodos(todos);
            
        },
        
        reset: function() {
        	localStorageService.clearAll();
        },
        
        saveTodos:function(todos) {
        
          // console.log('todosStorage::saveTodos : ' +todos);
           log.debug('todosStorage::saveTodos : ' +todos);
           
           localStorageService.set('todos', todos); 
        },
        
        removeAll:function() {        
           //console.log('todosStorage::removeAll : '); 
           log.debug('todosStorage::removeAll');
           localStorageService.clearAll(); 
        },

    };

}]);

/* ----------------------------------------------------------------------------------------------  */
