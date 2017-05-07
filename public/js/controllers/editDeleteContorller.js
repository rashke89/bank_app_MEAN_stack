angular.module('editDeleteContorller', [])
  .controller('editDelCtrl', ['$scope', '$http', 'dbService', function(scope, http, dbService){
    scope.a = 'Edit and delete controller';
    scope.e = dbService.accToEdit;
    scope.subEdit = function(id){
      http.post('/editAcc', scope.e)
        .then(function(result){
          console.log(result.data);
        })
        .then(function(err){
          console.log(err);
        })
    }
    console.log(scope.e);
  }])
