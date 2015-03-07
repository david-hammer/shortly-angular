angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function(url){
    Links.addLink(url)
      .then(function(res){
        console.log('success');
      });
    // var promiseRes = $http.post('/api/links',{url:url});
    // promiseRes.success(function(data){
    //   console.log('success!');
    // });
    // promiseRes.error(function(data){
    //   console.log('error: ', data);
    // });
  };

});
