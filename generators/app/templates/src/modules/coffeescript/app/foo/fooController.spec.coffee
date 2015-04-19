'use strict'

assert = require 'assert'

describe 'fooController', ->
  beforeEach ->
    angular.mock.module '<%= appname %>'
    angular.mock.inject ($rootScope, $controller) ->
      scope = $rootScope.$new()
      controller = $controller 'fooController', {$scope: scope}

  it 'congratulates you', ->
    assert.equal scope.welcome, 'Congratulations!'
