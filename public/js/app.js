'use strict';
var app = angular.module('popQuiz', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			temlateUrl: '/temlate/login.html',
			controller: 'loginCtrl',
			resolve: {
				user: function(loginService) {
					return loginService.list();
				}
			}
		})
		.when('/user/:id', {
			temlateUrl: '/temlate/user.html',
			controller: 'userCtrl',
			resolve: {
				user: function(userService, $route) {
					return userService.get($route.current.params.id);
				}
			}
		})
		.otherwise({
			redirectTo: '/'
		});
});