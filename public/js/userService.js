'use strict';
angular.module('popQuiz').service('userService', function($http, $q) {
	return {
		list: function() {
			var deffered = $q.defer();
			$http.get('/api/students').then(function(resp) {
				deferred.resolve(resp.data);
			});
			return deferred.promise;
		},
		get: function(user_id) {
			var deferred = $q.defer();
			$http.get('/api/user/' + user_id).then(function(resp) {
				deferred.resolve(resp.data);
			});
			return deferred.promise;
		}
	};
});