angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links;
      })
      .catch(function (error) {
        console.error(error);
      });
    // var resPromise = $http.get('/api/links');
    // resPromise.success(function(data){
    //   $scope.data.links = data;
    // });
    // resPromise.error(function(data){
    //   console.log('Error:', data);
    // });
  };
  $scope.getLinks();
});
