'use strict'

###*
 # @ngdoc function
 # @name paywhereStaticWebsiteApp.controller:MycontrollerCtrl
 # @description
 # # MycontrollerCtrl
 # Controller of the paywhereStaticWebsiteApp
###
angular.module 'paywhereStaticWebsiteApp'
  .controller 'MycontrollerCtrl', ($scope) ->
    $scope.awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
