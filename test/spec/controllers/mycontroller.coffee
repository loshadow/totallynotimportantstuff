'use strict'

describe 'Controller: MycontrollerCtrl', ->

  # load the controller's module
  beforeEach module 'paywhereStaticWebsiteApp'

  MycontrollerCtrl = {}
  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    MycontrollerCtrl = $controller 'MycontrollerCtrl', {
      $scope: scope
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(scope.awesomeThings.length).toBe 3
