angular.module('myApp', ['ngRoute', 'mainController', 'addAccountController', 'editDeleteContorller', 'dbService'])

.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'mainCtrl'
      })
      .when('/addAccounts',{
        templateUrl: 'views/addAcounts.html',
        controller: 'addAccCtrl'
      })
      .when('/edit&del', {
        templateUrl: 'views/editDelete.html',
        controller: 'editDelCtrl'
      })
});
