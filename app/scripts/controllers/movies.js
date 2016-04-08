'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
    var vm = this;

	$scope.movies = Movie.getList().$object;    
    // $scope.movies = [
	   //  {
	   //      title: 'This is Test 1',
	   //      url: 'https://www.youtube.com/watch?v=OhPFgqHz68o'
	   //  },
	   //  {
	   //      title: 'This is Test 2',
	   //      url: 'https://www.youtube.com/watch?v=b4pFkOGqDOc&list=RDb4pFkOGqDOc#t=2',
	   //  },
	   //  {
	   //      title: 'This is Test 3',
	   //      url: 'https://www.youtube.com/watch?v=wZfQXw-USJc&list=RDb4pFkOGqDOc&index=3'
	   //  },
	   //  {
	   //      title: 'Test 4',
	   //      url: 'www.facebook.com'
	   //  }
    // ];
    var movies = $scope.movies;
});
