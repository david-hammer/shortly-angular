angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $http, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url){
    var promiseRes = $http.post('/api/links',{url:url});
    promiseRes.success(function(data){
      console.log('success!');
    });
    promiseRes.error(function(data){
      console.log('error: ', data);
    });
  };

});
