angular.module('dbService', [])
  .service('dbService', function($http){
    this.db;
    this.accToEdit;
    this.getData = function(){
      return $http({
        method: 'GET',
        url: '/aa'
      })
    };
  })
