angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url){
    Links.addLink(url)
      .then(function(res){
        console.log('success');
      });
  };

});
