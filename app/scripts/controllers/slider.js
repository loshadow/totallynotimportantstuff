'use strict';

angular.module('paywhereStaticWebsiteApp')
  .controller('sliderCtrl', function($scope, retrieveImage){
    retrieveImage().success(function(data) {
      $scope.images = data;
    });

  })
  .factory('retrieveImage', function($http) {
    var promise = null;

    return function() {
      if (promise) {
        // If we've already asked for this data once,
        // return the promise that already exists.
        return promise;
      } else {
        promise = $http.get('json/images.json');
        console.log(promise);
        return promise;
      }
    };
  });
