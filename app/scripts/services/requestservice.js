/**
 * Created by Ernie on 2/7/15.
 */

(function () {

  'use strict';

  var app = angular.module('paywhereStaticWebsiteApp');

  app.factory('retrieveImages', function($http) {
    var promise = null;

    return {
      getImages : function(){
        if (promise) {
          // If we've already asked for this data once,
          // return the promise that already exists.
          return promise;
        }
        else {
          promise = $http.get('json/images.json');
          return promise;
        }
      }

    };
  });

})()





