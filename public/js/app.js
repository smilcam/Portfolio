angular.module('Dojo', ['br.fullpage', 'firebase'])
.controller('myCtrl',function($scope, $firebaseObject){
 var ref = new Firebase("https://samportfolio.firebaseapp.com/");
  // download the data into a local object
  $scope.data = $firebaseObject(ref);

}); 