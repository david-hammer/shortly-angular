angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    var resPromise = $http.get('/api/links');
    resPromise.success(function(data){
      $scope.data.links = data;
    });
    resPromise.error(function(data){
      console.log('Error:', data);
    });
  };
  $scope.getLinks();
});
