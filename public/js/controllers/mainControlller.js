angular.module('mainController',[])
  .controller('mainCtrl', ['$scope', '$http', 'dbService', function(scope, http, dbService){
    scope.accounts;
    scope.name = 'Home';
    dbService.getData().then(function(result){
      scope.accounts = result.data;
      dbService.db = result.data;
      console.log(dbService.db);
    }, function(err){
      console.log(err);
    });
    scope.editAcc = function(index){
      dbService.accToEdit = dbService.db[index];
    };
    scope.delAcc = function(index){
      console.log(scope.accounts[index]);
      http.post('/delAcc', scope.accounts[index])
        .then(function(result){
          console.log(result);
        })
        .then(function(err) {
          console.log(err);
        })
    }
    // scope.accounts  = dbService.accounts;
    // console.log(dbService.accounts);
  }])
