// js/app.js
'use strict';

/**
 * Déclaration du module principal et de ses dépendances : demoApp
 */
var demoApp = angular.module('todoApp', [

    // Dependencies of the main module
    'ngRoute',
    'LocalStorageModule',
    
    'todoAppServices',
    'todoAppControllers'   
    
]);

/**
 * Configuration du module principal : demoApp
 */
demoApp.config(['$routeProvider',

    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/',{
            templateUrl: 'partials/todo.html',
            controller: 'TodoCtrl'
        })
       
        .otherwise({
            redirectTo: '/'
        });
    }
]
);

demoApp.config(function (localStorageServiceProvider) {
    
  localStorageServiceProvider
    .setPrefix('todos')
    .setStorageType('localStorage') /* localStorage */
    .setNotify(true, true)
    
    });
/*

myApp.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('myApp')
    .setStorageType('sessionStorage')
    .setNotify(true, true)
});

*/

