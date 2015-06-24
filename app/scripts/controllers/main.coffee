'use strict'

###*
 # @ngdoc function
 # @name paywhereStaticWebsiteApp.controller:MainCtrl
 # @description
 # # MainCtrl
 # Controller of the paywhereStaticWebsiteApp
###
angular.module 'paywhereStaticWebsiteApp'
  .controller 'MainCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
