(function() {
  'use strict';



  angular.module('myFirstApp', [])

  .controller('MyFirstController', function($scope) {
    $scope.name = "Yun";
    $scope.sayHello = function () {
      return "Hello Coursera!";
    }
  });

})();
