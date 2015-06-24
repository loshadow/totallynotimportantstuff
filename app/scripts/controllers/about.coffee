'use strict'

###*
 # @ngdoc function
 # @name paywhereStaticWebsiteApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the paywhereStaticWebsiteApp
###
angular.module 'paywhereStaticWebsiteApp'
  .controller 'AboutCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
