'use strict'

###*
 # @ngdoc directive
 # @name paywhereStaticWebsiteApp.directive:myDirective
 # @description
 # # myDirective
###
angular.module 'paywhereStaticWebsiteApp'
  .directive 'myDirective', ->
    restrict: 'EA'
    template: '<div></div>'
    link: (scope, element, attrs) ->
      element.text 'this is the myDirective directive'
