'use strict';

/**
 * @ngdoc function
 * @name paywhereStaticWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paywhereStaticWebsiteApp
 */
angular.module('paywhereStaticWebsiteApp')
  .controller('PopupCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('test');
  });
