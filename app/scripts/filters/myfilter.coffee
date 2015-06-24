'use strict'

###*
 # @ngdoc filter
 # @name paywhereStaticWebsiteApp.filter:myFilter
 # @function
 # @description
 # # myFilter
 # Filter in the paywhereStaticWebsiteApp.
###
angular.module 'paywhereStaticWebsiteApp'
  .filter 'myFilter', ->
    (input) ->
      'myFilter filter: ' + input
