var assert = require('assert');

describe('fooController', function () {
  var controller, scope;

  beforeEach(angular.mock.module('<%= appname %>'));
  beforeEach(angular.mock.inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    controller = $controller('fooController', {$scope: scope});
  }));
  it('congratulates you', function () {
    assert.equal(scope.welcome, 'Congratulations!');
  });
});
