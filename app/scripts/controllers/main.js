'use strict';

/**
 * @ngdoc function
 * @name paywhereStaticWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paywhereStaticWebsiteApp
 */
angular.module('paywhereStaticWebsiteApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.referrer = "";
    $scope.subscription_id = "1";
    $scope.country_code = "PH";

    $scope.fields = {};
    $scope.login = {email: '', password: ''};

    var data=$scope.fields;
    $scope.submitRegistration = function() {

      $scope.login.email = data.email;
      $scope.login.password = data.password;

      $http.post('http://api.tackthis.localhost/user/signup', data)
        .success(function(data) {

          //$http.post('http://api.tackthis.localhost/auth/login',$scope.login);
          console.log('yay!');
          window.location = "http://dashboard.tackthis.com/";





        });
      //$http({
      //  method : 'POST',
      //  url : 'http://api.tackthis.localhost/user/signup',
      //  data : data, // pass in data as strings
      //  headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
      //})
      //  .success(function(data) {
      //    console.log('yay!');
      //  });

    };




  });
