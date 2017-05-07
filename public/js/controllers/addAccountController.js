angular.module('addAccountController',[])
  .controller('addAccCtrl', ['$scope', '$http', function(scope, http){
      scope.name = 'Add Account';
      scope.newAcc;
      scope.addAcc = function(){
        http.post('/addAcc', scope.newAcc)
          .then(function(result){
            console.log(result.data);
          })
          .then(function(err){
            console.log(err);
          })
      }
    }])
