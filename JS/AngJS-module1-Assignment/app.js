(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];
  function LunchController ($scope) {
    $scope.message = "List items you are having for lunch (separated by comma).";
    $scope.lunch = "";
    $scope.numItems = 0;

    $scope.checkLunch = function() {
      $scope.numItems = countItems($scope.lunch);
      if($scope.numItems >= 4){
        $scope.message = "Too Much!";
      }
      else if ($scope.numItems < 4 && $scope.numItems > 0 && $scope.lunch != ""){
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Please enter data first";
      }

      function countItems (list) {
        var listArray = list.split(",");
        return listArray.length;
      }
    }
  }

})();
